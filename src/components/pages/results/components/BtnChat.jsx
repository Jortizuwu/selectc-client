import React from 'react'

export const BtnChat = ({ typedChars, msg }) => {
  return (
    <div className="-right-20 bottom-0 z-40">
      <div className="transition-all blur-in overflow-y-scroll fixed -right-5 bottom-20 rounded-lg bg-white shadow-2xl w-full sm:w-1/2 xl:w-1/4 max-h-[400px] max-w-[550px] overflow-hidden">
        <div className="transition-all">
          <div className="relative overflow-hidden px-8 pt-8">
            <div
              width="80"
              height="77"
              className="absolute -top-10 -right-10 text-yellow-500"
            >
              <svg
                width="120"
                height="119"
                viewBox="0 0 120 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M6.38128 49.1539C3.20326 32.893 13.809 17.1346 30.0699 13.9566L70.3846 6.07751C86.6455 2.89948 102.404 13.5052 105.582 29.7661L113.461 70.0808C116.639 86.3417 106.033 102.1 89.7724 105.278L49.4577 113.157C33.1968 116.335 17.4384 105.729 14.2604 89.4686L6.38128 49.1539Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="text-2xl flex flex-col pb-4">
              <small>Hola</small>
              <span className="text-3xl font-bold">Como estas?</span>
            </div>
            <div className="pb-4 w-full inline-block">
              {window.localStorage.getItem('gptMsg') ? (
                <p className="typing-text text-justify">
                  {window.localStorage.getItem('gptMsg').slice(0, typedChars)}
                </p>
              ) : (
                <p className="typing-text">{msg.slice(0, typedChars)}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
