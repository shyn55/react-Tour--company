import MyNavbar from "../../components/navbar/Navbar";
import "./Home.css";
import img1 from "../../assets/images/undraw_winter-walk_m5sd.svg"

import Footer from "../../components/footer/Footer";

import Tours from "../../components/tours/Tours";




function Home() {
  

  return (

  
    <div >
      <MyNavbar />
      {/* main */}
      <div className="row row-cols-1 row-cols-md-2 m-4">
        <div className="pt-5">
          <h1>سفر آسان، خاطره انگیز، همیشه</h1>
          <p>
            تور گردی دیگه فقط یه سفر نیست، یه سبک از زندگیه. ما اینجام تا هر جای
            ایران رو که دوست داری، راحت و سریع پیدا کنی. از شمال سبز تا جنوب
            گرم، از کویر اسرارآمیز تا جنگل‌های ابری. تورهای لوکس، اقتصادی،
            طبیعت‌گردی یا حتی ماجراجویانه؛ چیزی که تو می‌خوای. فقط چند کلیک ساده
            تا مقصد رویاییت فاصله داری. همه تورها با راهنمای محلی، اقامت مطمئن و
            قیمت شفاف. ما بهت قول هوای خوش و جاده‌های بی‌نهایت رو نمی‌دیم؛ قول
            می‌دیم یه سفر واقعی، اونم با تو.
          </p>
        </div>
        <img src={img1} className="" alt="" />
      </div>
      {/* tours */}
       <Tours/>
       {/* footer */}
      <Footer/>
    </div>
  );
}
export default Home;
