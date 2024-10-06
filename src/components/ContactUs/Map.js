import React from 'react'
import './ContactUs.scss'

const Map = () => {
    return (
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6383415258733!2d106.83137187480584!3d10.838964289313635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175213485a49ac1%3A0x483b8ea73569cd90!2sS3.01%20Vinhomes%20Grand%20Park!5e0!3m2!1svi!2s!4v1728191403469!5m2!1svi!2s"
                title="Map of our location"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
    )
}

export default Map