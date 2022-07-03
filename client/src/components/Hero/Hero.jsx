import classes from "./Hero.module.css";
import heroPic from "../../assets/hero.png";
const Hero = ({ setShowForm, setShowHero }) => {
  const showFormHandler = () => {
    setShowForm(true);
    setShowHero(false);
  };

  return (
    <section className={classes.hero}>
      <div className={classes.txtBox}>
        <h2 className={classes.h2}>Need a touchless menu?</h2>
        <p className={classes.p}>
          You got it! Simply enter the information you need in your menu, and
          you get not only an online menu, but also the QR code for it. Print
          and go!
        </p>
        <button onClick={showFormHandler} className={classes.btn}>
          Begin
        </button>
      </div>
      <img className={classes.pic} src={heroPic} />
    </section>
  );
};

export default Hero;
