import React from 'react'
import './carousel.css';

function Carousel() {
    return (
        <>
            <div className='carousel'>
                <div className='area'>
                    <h2 className='caousel-h2'>Medicinal and Aromatic Plant - Portal</h2>
                    <p>ઔષધી અને સુગંધિત વનસ્પતિઓ પરંપરાગત અને આધુનિક ચિકિત્સામાં મહત્વપૂર્ણ છે, જે પ્રાકૃતિક
                        ઉપચારો અને સુગંધમાંની આપત્તિઓને દૂર કરવામાં આવે છે. આવી વનસ્પતિઓ વિવિધ રોગોને
                        મોકલવામાં આવે છે અને શાંતિને સુધારે છે. આ વનસ્પતિઓ ઔષધીપદાર્થો, કોઝમેટિક્સ, અને
                        રસોઇના ઉપયોગમાં યોગદાન આપે છે, આહેવામાં તેમનો આદરણીય મહત્વ છે.</p>
                </div>
                <div className='dark-overlay'></div>
                <div className='cr-img1'><img src='./2.jpg' alt='bg' /></div>


            </div>
        </>
    )
}

export default Carousel
