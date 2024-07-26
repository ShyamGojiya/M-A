import React from 'react'
import './ourserv.css'
import {IoIosLeaf} from 'react-icons/io';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import {PiPottedPlantBold} from 'react-icons/pi';

function Ourserv() {
    return (
        <>
            <div className='sm:mx-24 max-sm:mx-2'>
                <div className='ourserv-1'>
                    <h2 className='text-4xl font-bold text-br'>અમારી સેવાઓ</h2>
                    <h6 className='text-lg font-semibold'>અમે તમારા માટે સંપૂર્ણ સેવા પ્રદાન કરીએ છીએ.</h6>
                </div>
                <div className='ourserv-bottom'>
                    <div>
                        <div className='s1'>
                            <PiPottedPlantBold className='text-8xl text-green-700'/>
                            <div className='s11'>
                                <h4 className='font-semibold'>ઔષધીય અને સુગંધિત છોડની માહિતી</h4>
                                <h6>ઔષધીય અને સુગંધિત છોડ વનસ્પતિઓ સ્વાસ્થ્ય અને ઉદ્યોગમાં મહત્વપૂર્ણ છે, તેમનું ઉપયોગ ચિકિત્સા, ખુશબુ, આણો અને વધુનો મળે છે.</h6>
                            </div>
                        </div>

                        <div className='s1'>
                            <IoIosLeaf className='text-7xl mr-2 text-green-700'/>
                            <div className='s11'>
                                <h4 className='font-semibold'>ઔષધીય અને સુગંધિત છોડના ઉપયોગ</h4>
                                <h6>ઔષધીય અને સુગંધિત છોડના ઉપયોગમાં રોગ નિવારણ, આરોગ્ય સુધારણ, ખુશબુ અને ઉદ્યોગમાં મહત્વપૂર્ણ છે.</h6>
                            </div>
                        </div>

                        <div className='s1'>
                            <HiOutlineShoppingCart className='text-8xl text-green-700'/>
                            <div className='s11'>
                                <h4 className='font-semibold'>અમારી પ્રોડક્ટો</h4>
                                <h6>ઔષધીય અને સુગંધિત છોડ અમારી વિશેષ ઉત્પાદનોમાં વપરાશાત્મક છે. ઔષધીય અને સુગંધિત છોડ અમારી વિશેષ ઉત્પાદનોમાં વપરાશાત્મક છે.</h6>
                            </div>
                        </div>
                    </div>

                    <div className='vid-area'>
                        <video className='vid' controls>
                            <source src="https://res.cloudinary.com/dcxdcs6l4/video/upload/v1698816948/MAAPP/nrewon87qxvwtiqwrvej.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourserv
