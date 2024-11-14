namespace myproject1;

entity Work
{
    key ID : UUID;
    Title : String(100);
    Value : String(100);
}

@cds.persistence.skip
entity TempData
{
    key ID : UUID;
    Message : String(100);
}
