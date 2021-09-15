import Head from 'next/head';

export default function Contact() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Head>
        <title>Contact page</title>
        <meta name='description' content='Contact us' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-xs my-2 overflow-hidden rounded shadow-lg'>
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold'>Contact us</div>
          <p className='text-base text-grey-darker'>
            This will be the place to contact us later on.
          </p>
        </div>
      </div>
    </div>
  );
}
