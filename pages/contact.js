import Head from 'next/head';

export default function Contact() {
  // const submitContact = async (event) => {
  //   event.preventDefault();
  //   const name = event.target.name.value;
  //   const res = await fetch(`https://api.agify.io/?name=${name}`);
  //   const result = await res.json();
  //   alert(`Hi ${name} your age is most likely: ${result.age}`);
  // };

  const submitContact = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        name: name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const result = await res.json();
    alert(`Is this your full name: ${result.name}`);
  };

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
          <form className='flex flex-col' onSubmit={submitContact}>
            <label htmlFor='name' className='mb-2 italic'>
              Name
            </label>
            <input
              className='mb-4 border-b-2'
              id='name'
              name='name'
              type='text'
              autoComplete='name'
              required
            />
            <button
              type='submit'
              className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
