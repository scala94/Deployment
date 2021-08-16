import React, {useState} from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Collapse} from 'react-bootstrap';

const Portfolio = () => {
    return (
        <div  style={{
            backgroundImage: 'url("https://wallpaperforu.com/wp-content/uploads/2021/02/Wallpaper-Black-And-White-Laptop-Computer-Keyboards-Tech43.jpg")',
            backgroundPosition: "center",
            backgoundSize: "cover",
        }}>
        <div className="services-header" >
            <h1>Portfolio</h1>
        </div>
        <div className="services-wrapper">
            <Card
            img="https://www.clsbe.lisboa.ucp.pt/sites/default/files/styles/landscape_16_9/public/assets/images/logotipo-clsbe.png?itok=VD-C1KqV"
            title="Master Thesis"
            description="Paper title: 'Flat-tax and minimum income experiment in an OLG model of Italy'."
            edescription="Published in Universidade Catolica University repository. This paper aims to quantitatively analyze the impact of a pending fiscal reform in Italy (late 2019) for different cohort ages in an Overlapping Generation (OLG) model with permanent labour productivity across agents and a stochastic labour income component. Two Computational Experiments have been conducted: the former involves a Mininmum Income scheme and a Flat-Tax only for the personal labour income, the latter sets the marginal rate for personal labour and capital income."
            linkname="Master Thesis Link"
            link="https://repositorio.ucp.pt/handle/10400.14/29114"
            linkname2="Github Link"
            link2=""
            />
            <Card
            img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAhFBMVEVK1f8YvO7///8At+0Aue0Atu1N1/830v/l9vxD1P9GxPCh3fbS7/v0+/4dvu76/v/g9PyF1fTt+f3E6vmq4ffC6fm04/h80vNjzPLb9f87zPk1we+P2PWd3Pa45vhxz/OR4/9/3/+n6P+z6/+B3/9i2f+c5f8hxvbO8v+v6v9Vx/Bv3P91gkaLAAAMgElEQVR4nO2bCZuaOhSGgRwElEXFBcet7cy0U/r//9/NyR4Ex3G9g/me595W0JC8nJwN6nlOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5Ot1QSJe9eFCUtJ6LBe9Jy4nkV/ZgGQVB8/GxQSaK3D3oiGP+MHjSz/58iRgQV/zOpRG9TeeKvo8UV/WWcCkblI5HGlXgrdiSL8f8TtxO5KIsFkHA4QyqFMK7ojX0arUMCKf0LeIMHT/P/oOQXdUqhTwX+DgH9RlrRK/51BoAnSBYEe3C2RbHQ3bZkTCiVCjfja8Td2HQoDsMoCHYAL862Ison94XAH6PjQoBBCvKoX1HjAx/+PD2tiHIJFRaflOiqcAsaB3Pq5wn++fS0KBuiufjhggXBjXkM6AH2OU/acNHUtU19dHINWH6IuUIZ+m2wfL+FQPRb5B2msvjj13vveDW2oU9YBhFMwDgmtyFyO3Dz0eqAlEpy3+6bzGJhdtMbhLBMI1piHKT/1Qatmq5bfmy6+eRHJyuqlXdH42JlW/bjhjcooruu1lyGbA9iTMwtgKVml9u//zgGKyjuFxOSN37Jze3uDy52qUhAxo2IOqFYeTLMs2bmtjTdfBQfhRVkd0vPojG/4vR21UbyF6sd6dyxsvEBAA1sIWlhvbM0YfkvxhQ/gRXM7pWeRTLMQFsYuoqSnzTjJAiIENjg4pabzWaJ6dYeCD0MfkhnsTZZmW5ew8qU7OAIf2409YYidUF6N290gxIcvp7M0hYTKeJythyu6V+sVALdvJqi+hmtuaWg3ulBJpDfpQo3Yd2mNqPRdhp8rhQAbFwSgIY1NE+TSv12Dq3p2dVlwvKvb85JNPjVsKe03C0Ws8ViV6aNExu/gYsD6IDlE2VbY/tOJzLhTzoIJslnRUDSdj7RsMC8m9dREr2pfHI83+5pNhVsQ5AK6Wqz9X5bKhppRUxeHEAXLF+ZFstnJa0k+vm6mhZBMV29NtvY/Hzyg30BvzH/PTj8ShK9//6IqV/M4vKHykGj95//5AWrqhrCVc054Z13ZEDThZpASH16bLomKLCchpBmWbGgGlekSasT1loenxLl5ZLkr+n8i9emdUX/Gmlb3MwxozdrL3y8s/PJOGhoD9dzXMk7v2a5hHCGfgWq5nphH2AUJHQek9Cf8G2ZmpsRAXTCyuXxFUgvFx1m+xaLJGnJcMfWtAcHVF7pCMnvw9/BYbVxpvi0i62P5opJFYRT7PAxb+MPfWYMhPJJQ7QQBEPWvGqsraqxG1Ytj6ssjrV/mio1rWSQtXwhKHQOnPxrOb+KWLLYFJ/fFWhF7E6MRIQjdL2TSSDCSI33bsyQIKd6pmod8Fn7prLzUxVMbVgwk8erY6yw1ahQtLKiNKSBtLJivN8ODvLN39FU+orYRadrVRtTUDGd6AZEIY3ClB0onHGml0tJ4nqsBJW0WxY0XBY9slULKdLdXHueUSR8v2keVl5by3K0HWZQR8kvOwEqUjXJS918NOUBXa2MXYBFLbVGjsRaLjOuzGo4m7DWYGiixtmLbw8VvQoLAzJUoXgYqVkJfDSYQT5Rhjbjaa1Rs6eTqtqoAXbkZfACofzI6w415cvcPDMsywzY9pK2JISuhlvDxoSDNHPjs4ZFEzShudHi2gnSROZtK7mQUGZiK8KTEGFNqfgCgBy6ZHmA3oQFDd70dCh3Af0F3akgTzfywcvcPD79WlgjYuRiXQbQu4N1sDB9KKyv4qL3xhFyvJCWrJRhGaOFMrINeRLCDWeu0hfQMNBAdKjM5WOnjbgIsFDTAavZVPoirL+NlgtjUhJ76Qwerie2W8yl3YI4Cmu6V50LabLmbyXAGfAsDA1ypK8GMq9NeQEjR9Vd3JCbK/MYeTcsu6n0RVg0b5ha6Se7Q0OBQghtn6VadviDwHblx2CVQ3UVIhyS/XBE/HYMvDqJ3vdmGhfKgMph7cUns6iHRZal4vlm1zZkevkcS4fwHpiPuvhKUmLcTI5In1ALKC2H/9k2jOWDWl8cmEOu5UtzY19iYesP44IiuQqfHJZEZ3kQbCzJmRyDdb6bR6dl0qp4qMYMgczlqgjPKfCECsMAvM91Miz12+rol/R6Bn+IXy+3i3JsJF0clowQyzYYn8G6oA3BfGk8lBkQJTBaCOcknu7MmLunpDaldnCknspTJ8PieYaRSnTCouuhBetHS2bKxlAXalQKJ8K6oA3BI0855DYcoAEEwnPSBGc0yaXhZ2ElIhiQOlUY22DlovkXknxvVHCcg85IWyQjpM7622BJirnfrs9gnZ+f8oInWE2oc9hgqsOWI+YsEh1MqfYQsndoiL/hVPY2q/YMHsK5WinbtPjMo1sjbn3rjnJHwJJJfReKz2Gd3W1OPJG2pJMx8wPozOdWrKKRfBX6ZISdP5Fm7podwK5yR9kBT2mVZaXbUVNbUZqrNoXQdGalDlewrAvcfFTr2z/ar0NsE1Sg0mfmZnIyXOp2+mJ9OI+u2lCZEjMblV/OQjiQGEin/UU5WtY+sfMsdaHaur4ubE6AdYGbH7z4G8O54BsL2WRZVVVdVfslssqM8jSdNNvwx2DpDg3fY/LjirSMwaRqx5jVjnjITkplNLTeLID9RPaMToF1gZsfJDnJJ6c8sIiXfiuqblgqReShVH1s/HptvjHHL6USJ5WG2nmWmfYxNycK+9NgXdCGEMX6cpR2IZuWo02z5DkFlvLHvKOo7GJhLBXW1LAzbhmqdjAej9sZvErVdIsIuB/bwldgXdCGiGqsfWhMhHW1xBWlqBIdyG5f5TRBBnJgEKfAmpor1VZihFOoDWNTNFXzTFtjahunerEgLM3zp8K6oA2B7eu53Ap4p1bogrHJPA7l4VUjaz8JljwuXlYiultFuF8nMkJOLJe0Nd8l4OJdfN0+Gufq+RPT3IaVd3gMrXO7zVFpNqzQy+4In6d+03RhLOFUWLrZw3eNNq2g2E32+8lONUM5LIWC+XcgQ10ayBaxOhDM6QijqTWA3vgxDVIHKU6D1nltCHz3xLB87D9MWLmvew2YRMy/DGtlL0VXnQfid0VXj+lmv9xar8iBnlyLCmjMBNVVQUqd5eajzErz2JKQlWlKtd2FtqF0wVJs1CY/eIrFNWtbK1MmD4kb1/HIQ5wF+27cws1ju8ZqufAlWS+VrhttGeuiyrM0jss0VLfsofFGgGApR143z2S5dEqqkm8bQeVdtXX4OKsz3XzzBVxAV7BqvoBbdMKS/YRV41aCdCEjnWMf7qNieRAcpUpQfk6ZOTkoyAvtLojx6o56CfaIzug2N8bl6UwxNJduvK3cQkt4l3XzhFh7bIwE/sx6xhVvzMAFuWE4Y3xTQOy7wvzOwhygGJkDEKNrof3wEX3VceHrWWafVu4e68HzEcvCIjkusl1+4CNgvZsWcSOMAtSjMs6KYrraTXLS+BEZzsZZkY3LzZqfgs24yOa5PcJ+ltIRsjidVY0kAdbbdFoU2Wp0OJ1WfREW+izjgQua+bTG26/3ByYU8RGrBqO3a5/AlLbl68BeeGvNhtg541Tb2GKAtrF9OXb3bC19FVasTRaYC47pDUJa6ikWuqXy1Mt/L30RVvKqAhL/R2E8eMXMwvhxbGxtHCxPPJ7GpDkUXWPuwHjSgn1nCDHePXhRt9IXYfF/TlKOdlM7EBPu6ePFCBku+mlYX4blebr1vTBfqMh1vtyZv393fZmV6sY3u8YwFAXErq+szrAsL3qZbDd1S/gHqDbb5ScV/HfWGbDwOXBnoXxyzvIddQ4sbC8/et4P0VmwPO/l0fN+iM6ENUgePfFH6ExYVF2Penus82F5fx4997vrAliDP8/m5i+A9XxB8RJYTxcUL4PlPVdQvBDWwHv0Au6pC2FRXE+UQlwM65mC4uWwnigoXgEWDYpPQusqsJ4lKF4H1pPU1deB5T1HXX01WN4TBMXrwXqCFOJ6sJ4ghbgirP7X1VeF1fegeFVYtK7udVC8Liyv3ynE1WH1OSheHVafg+L1YfU4KN4CVm/r6pvA6mtQvAksr6dB8VawehkUbwWrl0HxZrD6SOt2sDwvevTirq1bwhokPXPzt4Tl9S0o3hhWv2jdGlavUohbw+pVULw5rD7V1XeA1Z+6+h6welNX3wNWb17iug+sngTFO8HqR1C8F6xe0LobrD6kEHeE9f2fV98RlvftK8X7wvrmL3HdGdb3TiHuDOt7B8V7w/rWQfH+sL5xs/k/dvXbVKKgTj8AAAAASUVORK5CYII="
            title="Portfolio Website"
            description="Portfolio website created with React and Bootstrap v5.1." 
            edescription="As a good software developer I felt the exigence to create my personal portfolio website :). Well, here it is, also available for mobile devices. Access the GitHub link below for the project."
            linkname="GitHub Link"
            link="https://github.com/scala94/Deployment"
     
             />
            <Card
            img="https://www.insightplatforms.com/wp-content/uploads/2020/02/Tableau-Logo-Square-Insight-Platforms.png"
            title="Tableau SA"
            description="Smart Automation processes for Admin Tableau Server."
            edescription="Worked on a moltitude of Smart Automation processes for Tableau Server on an Administrative side."
               />
            <Card
            img="https://i.pinimg.com/originals/8c/31/e6/8c31e6e470d8de86b8ccfadf45024609.jpg"
            title="Super Mafio"
            description="Check my game, created in Unity Engine with C#."
            edescription="With an alternative control system concept, Super Mafio is a local 2 player game arena playable exclusively with xbox controllers (on PC). Check the project in the GitHub link below or download the build and enjoy!"
            gif="https://c.tenor.com/u4HyNu9--2sAAAAC/download-it-kendall-gray.gif"
            />
            <Card
            img="https://pierluigivinciguerra.com/wp-content/uploads/2020/07/0_P8tXxVwLUCS95Yym.png"
            title="Web Scrapers"
            description="Built several scrapers with Python Scrapy and Selenium Packages"
            edescription="Gained web-scraping experience in working and non-working related projects. You can find Scrapy spiders for H&M and LM in my GitHub, created for data collection and analysist purposes."
            />
            <div>
                <h1 className="serv-bottom"></h1>
            </div>
        </div>
        </div>
    )
}

function Card(props) {
    const[open, setOpen] = useState(false)
    return(
        <div className="card">
            <div className="card-body">
                <img src={props.img} className="card-img" alt="loading..."/>
                <h2 className="card-title" style={{ textAlign: 'center' }}>{props.title}</h2>
                <p className="card-description" style={{ textAlign: 'justify' }}>{props.description}</p>
                <ExpandMoreIcon className="expand-icon" onClick={()=> setOpen(!open)}
                aria-controls="collapse"/>
                <Collapse in={open}>
                    <div id="collapse"  className="expand-description">
                        <h1 style={{ textAlign: 'justify' }}>{props.edescription}</h1>
                        <img src={props.gif} className="card-gif" alt=""/> 
                        <a href={props.link} className="btn-expand">{props.linkname}</a>
                        <h1></h1>
                        <a href={props.link2} className="btn-expand">{props.linkname2}</a>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Portfolio