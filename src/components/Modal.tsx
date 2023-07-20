type Props = {
    onCloseModal : ()=>void
}

function Modal({onCloseModal}: Props) {

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div className="inline-block align-middle bg-white rounded-lg overflow-hidden text-right shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[50%] sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-right">
                        <h3 className="text-lg leading-6 font-bold text-gray-900" id="modal-title">
                        &#9756; شرایط و قوانین شرکت در قرعه‌کشی این کوئیز:
                            <ul className='font-light italic text-md'>
                                <li className='list-disc list-inside pr-4 my-4'>هر شخص فقط یک بار قادر به شرکت در این کوئیز است. در صورت تکرار فرد از قرعه‌کشی نهائی حذف می‌شود </li>
                                <li className='list-disc list-inside pr-4 my-4'>مدت زمان این کوئیز از زمان فشردن دکمه شروع 5 دقیقه بوده و پس گذشت این زمان کوئیز خود به خود پایان می‌یابد. امتیاز شما پس از این زمان ثبت شده و قادر به ارسال آن برای شرکت در قرعه‌کشی خواهید بود </li>
                                <li className='list-disc list-inside pr-4 my-4'> نکته مهم برای شرکت در قرعه‌کشی این که ارسال هدایا *فقط* برای داخل ایران امکان‌پذیر است </li>
                                <li className='list-disc list-inside pr-4 my-4'>مهلت زمان شرکت در قرعه‌کشی تا تاریخ 15 مرداد 1402 خواهد بود و نتایجی که پس از این تاریخ ثبت گردند، در قرعه‌کشی شرکت داده نخواهند شد </li>
                            </ul>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" onClick={onCloseModal} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                    متوجه شدم
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Modal