import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { items, amount } = await req.json();

    const description = items
      .map((i: any) => `${i.name} x${i.quantity}`)
      .join(', ');

    const response = await axios.post(
      'https://api.xendit.co/v2/invoices',
      {
        external_id: `order-${Date.now()}`,
        amount,
        description,
        success_redirect_url: 'https://yourdomain.com/success',
        failure_redirect_url: 'https://yourdomain.com/failure',
      },
      {
        auth: {
          username: process.env.XENDIT_SECRET_KEY!,
          password: '',
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// import axios from 'axios';

// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   const body = await req.json();
//   const { productId, amount } = body;

//   try {
//     const response = await axios.post(
//       'https://api.xendit.co/v2/invoices',
//       {
//         external_id: `order-${productId}-${Date.now()}`,
//         amount: amount,
//         description: `Purchase of ${productId}`,
//         success_redirect_url: 'https://yourdomain.com/success',
//         failure_redirect_url: 'https://yourdomain.com/failure',
//       },
//       {
//         auth: {
//           username: process.env.XENDIT_SECRET_KEY!,
//           password: '',
//         },
//       }
//     );

//     return NextResponse.json({ invoice_url: response.data.invoice_url });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: 'Failed to create Xendit invoice' },
//       { status: 500 }
//     );
//   }
// }
