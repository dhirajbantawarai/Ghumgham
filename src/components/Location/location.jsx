import React from 'react'

const location = () => {
    return (
        <div>
            <div>
                <div className="cotainer pb-10">
                    <h1 className='inline-block 
                    border-l-8 border-primary/50
                    py-2 pl-2 mb-4 text-xl font-bold
                    sm:text-3xl'>
                        Location to visit
                    </h1>
                    <div className='rounded-xl'>
                        <iframe
                            src=
                            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.277768367945!2d85.2849328449226!3d27.709030242067413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1716534009822!5m2!1sen!2snp"

                            frameborder="0"
                            width="100%"
                            height="350"
                            allowFullScreen=""
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            style={{ borderRadius: "20px" }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default location