<template>
  <form class="border-t py-10 w-full">
    <h1 class="text-xl font-bold">Contact The Owner</h1>
    <div class="w-5/6 flex flex-row mt-5">
      <input
        class="w-4/12 border-2 mr-2 px-3 py-2 rounded-md text-md text-gray-600 focus:outline-none"
        type="text"
        placeholder="Name"
      />
      <input
        class="w-5/12 border-2 mr-2 px-3 py-2 rounded-md text-md text-gray-600 focus:outline-none"
        type="text"
        placeholder="Email"
      />
      <input
        class="w-3/12 border-2 px-3 py-2 rounded-md text-md text-gray-600 focus:outline-none"
        type="text"
        placeholder="Phone"
      />
    </div>
    <div class="w-5/6 mt-5 mb-5">
      <textarea
        class="w-full border-2 p-2 text-lg text-gray-600 focus:outline-none rounded-md"
        name="description"
        rows="5"
        placeholder="Message"
      ></textarea>
    </div>
    <button
      class="bg-sky-500 text-white shadow-md py-3 px-10 font-bold text-2xl rounded-md"
    >
      Submit
    </button>
  </form>
</template>
