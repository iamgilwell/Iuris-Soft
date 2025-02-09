from django.db import models


class CaseStatus(models.TextChoices):
    OPEN = "OPEN", "Open"
    CLOSED = "CLOSED", "Closed"
    PENDING = "PENDING", "Pending"


class DocumentType(models.TextChoices):
    CONTRACT = "CT", "Contract"
    EVIDENCE = "EV", "Evidence"
    CORRESPONDENCE = "CO", "Correspondence"
    OTHER = "OT", "Other"


class UserType(models.TextChoices):
    JUDGE = "Judge", "Judge"
    ADVOCATE = "Advocate", "Advocate"
    LAWYER = "Lawyer", "Lawyer"
    NORMAL = "Normal", "Normal User"
