import React from 'react'

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-roboto font-medium text-[20px] text-primary bg-blue-gradient rounded-[10px] outline-none hover:bg-violet-600 ${styles}`}>
    Los geht's!
  </button>
);

export default Button
