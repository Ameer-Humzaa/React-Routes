import React from 'react'
import Herosec from '../Components/herosec'
import Product from '../Pages/Product'
import Team from '../Pages/Team'
import About from '../Pages/About'
const Landing = () => {
  return (
    <div>
      <Herosec/>
    
     {/* Collection */}
      <div className="bg-gray-100">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
        <div className="group relative">
          <img
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg"
            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
            className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
          />
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0" />
              Desk and Office
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">
            Work from home accessories
          </p>
        </div>
        <div className="group relative">
          <img
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg"
            alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
            className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
          />
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0" />
              Self-Improvement
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">
            Journals and note-taking
          </p>
        </div>
        <div className="group relative">
          <img
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg"
            alt="Collection of four insulated travel bottles on wooden shelf."
            className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
          />
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0" />
              Travel
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">
            Daily commute essentials
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


     <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
      Customers also purchased
    </h2>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
          alt="Front of men's Basic Tee in black."
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      <div className="group relative">
        <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg"
          alt="Front of men's Basic Tee in white."
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Aspen White</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      <div className="group relative">
        <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg"
          alt="Front of men's Basic Tee in dark gray."
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Charcoal</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      <div className="group relative">
        <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg"
          alt="Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube."
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                Artwork Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Iso Dots</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
    </div>
  </div>
</div>


 



<div className="relative overflow-hidden bg-white">
  <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Summer styles are finally here
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesn't care if you live or die.
        </p>
      </div>
      <div>
        <div className="mt-10">
          {/* Decorative image grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
          >
            <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img
                      src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                </div>
                <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                </div>
                <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
          >
            Shop Collection
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <img
      src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
      alt=""
      className="mx-auto h-12"
    />
    <figure className="mt-10">
      <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
        <p>
          “SMIT (Saylani Mass IT Training Program) is one of Pakistan’s largest free training initiatives launched by the Saylani Welfare International Trust. It provides professional IT education and skills training in areas like Web Development, Mobile App Development, MERN Stack, AI, Cloud Computing, Graphic Design, and more. The goal of SMIT is to empower youth with digital skills, create employment opportunities, and strengthen Pakistan’s IT industry”
        </p>
      </blockquote>
      <figcaption className="mt-10">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          className="mx-auto size-10 rounded-full"
        />
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-gray-900">Judith Black</div>
          <svg
            viewBox="0 0 2 2"
            width={3}
            height={3}
            aria-hidden="true"
            className="fill-gray-900"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          <div className="text-gray-600">CEO of MernDev</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>


<div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
  <img
    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=screen"
    alt=""
    className="absolute inset-0 -z-10 size-full object-cover object-right opacity-10 md:object-center"
  />
  <div
    aria-hidden="true"
    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
  >
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      }}
      className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15"
    />
  </div>
  <div
    aria-hidden="true"
    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
  >
    
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      }}
      className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15"
    />
  </div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
        Work with us
      </h2>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
      </p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">
          Open roles <span aria-hidden="true">→</span>
        </a>
        <a href="#">
          Internship program <span aria-hidden="true">→</span>
        </a>
        <a href="#">
          Our values <span aria-hidden="true">→</span>
        </a>
        <a href="#">
          Meet our leadership <span aria-hidden="true">→</span>
        </a>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-700">Offices worldwide</dt>
          <dd className="text-4xl font-semibold tracking-tight text-gray-900">
            12
          </dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-700">Full-time colleagues</dt>
          <dd className="text-4xl font-semibold tracking-tight text-gray-900">
            300+
          </dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-700">Hours per week</dt>
          <dd className="text-4xl font-semibold tracking-tight text-gray-900">
            40
          </dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-700">Paid time off</dt>
          <dd className="text-4xl font-semibold tracking-tight text-gray-900">
            Unlimited
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>







 <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
    <div className="max-w-xl">
      <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
        Meet our leadership
      </h2>
      <p className="mt-6 text-lg/8 text-gray-600">
        We’re a dynamic group of individuals who are passionate about what we do
        and dedicated to delivering the best results for our clients.
      </p>
    </div>
    <ul
      role="list"
      className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
    >
      <li>
        <div className="flex items-center gap-x-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
          />
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
              Leslie Alexander
            </h3>
            <p className="text-sm/6 font-semibold text-indigo-600">
              Co-Founder / CEO
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
          />
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
              Michael Foster
            </h3>
            <p className="text-sm/6 font-semibold text-indigo-600">
              Co-Founder / CTO
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
          />
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
              Dries Vincent
            </h3>
            <p className="text-sm/6 font-semibold text-indigo-600">
              Business Relations
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
          />
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
              Lindsay Walton
            </h3>
            <p className="text-sm/6 font-semibold text-indigo-600">
              Front-end Developer
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
          />
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
              Courtney Henry
            </h3>
            <p className="text-sm/6 font-semibold text-indigo-600">Designer</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
          />
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
              Tom Cook
            </h3>
            <p className="text-sm/6 font-semibold text-indigo-600">
              Director of Product
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>


      
<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-lg/8 font-semibold text-gray-900">
      Trusted by the world’s most innovative teams
    </h2>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img
        width={158}
        height={48}
        src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
        alt="Transistor"
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
      />
      <img
        width={158}
        height={48}
        src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
        alt="Reform"
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
      />
      <img
        width={158}
        height={48}
        src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
        alt="Tuple"
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
      />
      <img
        width={158}
        height={48}
        src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
        alt="SavvyCal"
        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
      />
      <img
        width={158}
        height={48}
        src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
        alt="Statamic"
        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
      />
    </div>
  </div>
</div>



<div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div className="max-w-xl lg:max-w-lg">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
          Subscribe to our newsletter
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
          velit quis. Duis tempor incididunt dolore.
        </p>
        <div className="mt-6 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            type="email"
            name="email"
            required=""
            placeholder="Enter your email"
            autoComplete="email"
            className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Subscribe
          </button>
        </div>
      </div>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/50 p-2 ring-1 ring-gray-200">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6 text-gray-600"
            >
              <path
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <dt className="mt-4 text-base font-semibold text-gray-900">
            Weekly articles
          </dt>
          <dd className="mt-2 text-base/7 text-gray-600">
            Non laboris consequat cupidatat laborum magna. Eiusmod non irure
            cupidatat duis commodo amet.
          </dd>
        </div>
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/50 p-2 ring-1 ring-gray-200">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6 text-gray-600"
            >
              <path
                d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <dt className="mt-4 text-base font-semibold text-gray-900">
            No spam
          </dt>
          <dd className="mt-2 text-base/7 text-gray-600">
            Officia excepteur ullamco ut sint duis proident non adipisicing.
            Voluptate incididunt anim.
          </dd>
        </div>
      </dl>
    </div>
  </div>
  <div
    aria-hidden="true"
    className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
  >
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      }}
      className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
    />
  </div>
</div>



    
    </div>
  )
}

export default Landing

