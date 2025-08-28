import styles from './about-us.module.css'


export default function AboutUs(){
    return(
        <section className={styles.aboutUsContainer}>
           <div className={styles.imageSection}>
              <img src="/images/mntcaboutus.jpg" alt="About us image section" />
</div>
           <div className={styles.textSection}>
              <h2>About <span className={styles.highlightText}>Us</span></h2>
              <p>
                We, Maths N Tech Club, are the official knowledge club of National Institute of Technology, Durgapur. Back in 2004, when the Regional Engineering College Durgapur got the status of an Institute of National Importance and was renamed as the National Institute of Technology Durgapur, Maths N Tech Club was formed.
              </p>
              
              <p>
                Our club was set up with the aim of creating a platform that helps in stimulating passion for mathematics and interest in the technology, of today's world. At Maths N Tech Club, we understand the importance of analytical reasoning and rational thinking. Hence, we organise a plethora of events throughout the year that aims at reinvigorating the seemingly dormant passion for mathematics and the thirst for knowledge about today's technology.
              </p>
              
              <p>
                It is our continuous goal to try our best to deliver knowledge about recent technical enhancements through the various workshops that we conduct around the year. Our attempts also aim to kindle analytical reasoning and logical aptitude in the brain through various fun events and experiences.
              </p>
              
           </div>
        </section>
    )
}