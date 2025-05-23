export type PaymentTransaction = {
    address: string;
    amount: number;
    bank_status: string;
    bank_trx_id: string;
    card_holder_name: string | null;
    card_number: string;
    city: string;
    currency: string;
    customer_order_id: string;
    date_time: string;
    disc_percent: number;
    discsount_amount: number | null;
    email: string;
    id: number;
    invoice_no: string;
    is_verify: number;
    method: string;
    name: string;
    order_id: string;
    payable_amount: number;
    phone_no: string;
    received_amount: string; // Can be converted to number if needed
    sp_code: string;
    sp_message: string;
    transaction_status: string | null;
    usd_amt: number;
    usd_rate: number;
    value1: string | null;
    value2: string | null;
    value3: string | null;
    value4: string | null;
  };
  