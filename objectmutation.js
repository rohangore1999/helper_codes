const data = {
  trEm: {
    title: "Transaction Emails",
    desc: "Channel for payment confirmation emails.",
    id: "trEm",
    emails: [
      {
        isActive: true,
        email: "avishek.ray+lrscurrent@cashfree.com",
      },
    ],
    maxEmails: 5,
    enabled: true,
  },
  rfEm: {
    title: "Refund Emails",
    desc: "Channel for transaction refund related emails.",
    id: "rfEm",
    emails: [
      {
        isActive: true,
        email: "avishek.ray+lrscurrent@cashfree.com",
      },
    ],
    maxEmails: 5,
    enabled: true,
  },
  disEm: {
    title: "Dispute Emails",
    desc: "Channel for dispute/chargeback notification emails.",
    id: "disEm",
    emails: [
      {
        isActive: true,
        email: "avishek.ray+lrscurrent@cashfree.com",
      },
    ],
    maxEmails: 5,
    enabled: true,
  },
  rskEm: {
    title: "Risk Emails",
    desc: "Channel for risk/flagged transaction related emails.",
    id: "rskEm",
    emails: [
      {
        isActive: true,
        email: "avishek.ray+lrscurrent@cashfree.com",
      },
    ],
    maxEmails: 5,
    enabled: true,
  },
  pgSrUp: {
    title: "PG Service Alerts",
    desc: "Receive Alerts on payment gateway service.",
    id: "pgSrUp",
    emails: null,
    maxEmails: 5,
    enabled: true,
  },
};

/*
While setting it contain function.... that will return an {}
In which,
all object will be spread
and for that particular id: it will gave {} in which rest all fields are same and only enabled will be toggled
*/

setData((prev) => ({
  ...prev,
  [category.id]: { ...category, enabled: !category.enabled },
}));
