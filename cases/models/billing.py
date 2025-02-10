from django.db import models
from django.utils import timezone
from accounts.models import Client
from cases.models import Case
from django.contrib.auth import get_user_model

User = get_user_model()


class Invoice(models.Model):
    case = models.ForeignKey(Case, on_delete=models.SET_NULL, null=True, blank=True)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    invoice_number = models.CharField(max_length=50, unique=True)
    date_issued = models.DateField()
    due_date = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    is_paid = models.BooleanField(default=False)

    def __str__(self):
        return f"Invoice #{self.invoice_number}"


class TimeEntry(models.Model):
    case = models.ForeignKey(Case, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    description = models.TextField(blank=True, null=True)

    @property
    def hours_worked(self):
        return (self.end_time - self.start_time).total_seconds() / 3600

    def __str__(self):
        return f"{self.case} - {self.user} - {self.start_time.date()}"


class ClientRetainer(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()
    remaining_balance = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Retainer for {self.client} - ${self.amount}"


class RetainerUsage(models.Model):
    retainer = models.ForeignKey(ClientRetainer, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField(default=timezone.now)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Usage of ${self.amount} from {self.retainer}"
