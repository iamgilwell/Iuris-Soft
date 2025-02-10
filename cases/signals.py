from django.db.models.signals import post_save
from django.dispatch import receiver

from cases.models.billing import ClientRetainer, RetainerUsage, TimeEntry


@receiver(post_save, sender=TimeEntry)
def track_retainer_usage(sender, instance, created, **kwargs):
    if created:
        try:
            retainer = ClientRetainer.objects.get(
                client=instance.case.client,
                start_date__lte=instance.start_time.date(),
                end_date__gte=instance.end_time.date(),
            )
            amount_to_use = instance.hours_worked * instance.user.hourly_rate
            if retainer.remaining_balance >= amount_to_use:
                RetainerUsage.objects.create(
                    retainer=retainer,
                    amount=amount_to_use,
                    description=f"Time Entry for {instance.case}",
                )
                retainer.remaining_balance -= amount_to_use
                retainer.save()
        except ClientRetainer.DoesNotExist:
            pass


@receiver(post_save, sender=ClientRetainer)
def update_remaining_balance(sender, instance, created, **kwargs):
    if created:
        instance.remaining_balance = instance.amount
        instance.save()
