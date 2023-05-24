import React from 'react'

export default function About() {
  return (

<section class="bg-white ">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg ">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">About Us</h2>
            <p class="mb-4">We are a team of experienced professionals dedicated to helping businesses manage their IT assets efficiently and effectively. </p>
          <p>Our mission is to provide our clients with the tools and services they need to keep their IT infrastructure running smoothly, minimize downtime, and reduce IT costs. We pride ourselves on our commitment to customer satisfaction, and we work closely with our clients to understand their unique needs and challenges. Our team has extensive experience in IT asset management, and we use our expertise to provide our clients with tailored solutions that meet their specific requirements. We are passionate about using technology to make our clients' businesses more productive and successful. Contact us today to learn more about how we can help your organization manage its IT assets.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
    </div>
</section>
  )
}
