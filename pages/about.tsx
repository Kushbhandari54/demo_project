import Navbar from "@/components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <h1 className={styles.about_us}>AboutUs</h1>
      <Image
        src={
          "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        width={400}
        height={300}
        className="mx-auto"
        alt=""
      />
    </div>
  );
};

export default AboutUs;
