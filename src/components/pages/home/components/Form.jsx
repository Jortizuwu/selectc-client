import React from 'react'

const Form = () => {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="w-full bg-white p-4 rounded-lg shadow-2xl">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 md:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Pregunta
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  className="w-full rounded-md py-3 px-6 bg-slate-100 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-lg"
                />
              </div>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Pregunta
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  className="w-full bg-slate-100  rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Pregunta
            </label>
            <input
              type="number"
              name="guest"
              id="guest"
              min="0"
              className="w-full bg-slate-100  rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-lg"
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 md:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Pregunta
                </label>
                <input className="bg-slate-100  w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-lg" />
              </div>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Pregunta
                </label>
                <input className="bg-slate-100  w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-lg" />
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Pregunta
            </label>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton1"
                  className="h-5 w-5 bg-slate-100 "
                />
                <label className="pl-3 text-base font-medium text-[#07074D]">
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton2"
                  className="h-5 w-5 bg-slate-100 "
                />
                <label className="pl-3 text-base font-medium text-[#07074D]">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 md:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Pregunta
                </label>
                <input className="bg-slate-100  w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-lg" />
              </div>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Pregunta
                </label>
                <input className="bg-slate-100  w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-lg" />
              </div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 md:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Pregunta
                </label>
                <input className="bg-slate-100  w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-lg" />
              </div>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Pregunta
                </label>
                <input className="bg-slate-100  w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-lg" />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Pregunta
            </label>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton1"
                  className="h-5 w-5 bg-slate-100 "
                />
                <label className="pl-3 text-base font-medium text-[#07074D]">
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton2"
                  className="h-5 w-5 bg-slate-100 "
                />
                <label className="pl-3 text-base font-medium text-[#07074D]">
                  No
                </label>
              </div>
            </div>
          </div>

          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
