import random
import string
from django.utils import timezone

from cases.models.billing import Invoice, TimeEntry


def generate_unique_invoice_number():
    while True:
        invoice_number = "".join(
            random.choices(string.ascii_uppercase + string.digits, k=8)
        )
        if not Invoice.objects.filter(invoice_number=invoice_number).exists():
            return invoice_number


def calculate_hourly_billing(case):
    total_hours = (
        TimeEntry.objects.filter(case=case).aggregate(Sum("hours_worked"))[
            "hours_worked__sum"
        ]
        or 0
    )
    if case.assigned_lawyer:
        return total_hours * case.assigned_lawyer.hourly_rate
    return 0


def generate_hourly_invoice(case):
    amount = calculate_hourly_billing(case)
    if amount > 0:
        invoice = Invoice.objects.create(
            case=case,
            client=case.client,
            invoice_number=generate_unique_invoice_number(),
            date_issued=timezone.now().date(),
            due_date=timezone.now().date() + timezone.timedelta(days=30),
            amount=amount,
        )
        return invoice
    return None
