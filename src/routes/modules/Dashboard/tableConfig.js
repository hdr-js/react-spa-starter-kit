export default [
  {
    id: 'refId',
    name: 'refId',
    renderer: 'Text',
    align: 'left',
    label: 'text_order_id',
  },
  {
    id: 'buddy',
    name: 'buddy',
    renderer: 'Text',
    props: {
      variant: 'name',
    },
    align: 'left',
    label: 'text_rider_name',
  },
  {
    id: 'rating',
    name: 'rating',
    renderer: 'Text',
    props: {
      variant: 'name',
    },
    align: 'left',
    label: 'text_rider_rating',
  },
  {
    id: 'customer',
    name: 'customer',
    renderer: 'Text',
    props: {
      variant: 'name',
    },
    align: 'left',
    label: 'text_customer_name',
  },
  {
    id: 'createdAt',
    name: 'createdAt',
    renderer: 'TimeStamp',
    props: {
      variant: 'time',
    },
    sorting: true,
    align: 'left',
    label: 'text_time_of_order',
  },
  {
    id: 'paymentMethod',
    name: 'paymentMethod',
    renderer: 'Text',
    props: {
      variant: 'code',
    },
    align: 'left',
    label: 'text_payment_method',
  },
  {
    id: 'status',
    name: 'status',
    renderer: 'OrderStatus',
    align: 'left',
    label: 'text_status',
  },
  {
    id: 'amount',
    name: 'amount',
    renderer: 'OrderAmount',
    align: 'left',
    label: 'text_amount',
  },
];
