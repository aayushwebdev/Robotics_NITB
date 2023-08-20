import React from 'react';
import styles from './Achievements.module.css';
import Img1 from '../../images/team.jpg';

const Achievements = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.competition} id="competition">
        <div className={styles.competitionCard}>
            <h2>Achievements</h2>
            <div className={styles.competitionLayer}>
                <div className={styles.competitionImg}>
                    <img src={Img1} alt="" />
                </div>
                <div className={styles.competitionContent1}>
                    <h5>ROBOCON</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quod praesentium quo ratione at recusandae quasi voluptatibus ipsam, exercitationem architecto. Commodi id ad aspernatur reprehenderit. Nisi vel qui soluta sint cumque, natus molestias doloribus enim maxime praesentium ducimus voluptatum eveniet eligendi ut omnis inventore. A, quaerat dolorem. Itaque cumque fuga culpa? Qui id officiis a possimus eum inventore quidem suscipit, deserunt cumque rem consequatur odit maxime blanditiis ut beatae illum sequi fuga quos. Alias excepturi aperiam nobis esse, aliquam ut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut debitis facilis id, natus dicta illum ab alias impedit delectus libero cupiditate ex consectetur quaerat soluta repellendus itaque expedita, ea obcaecati similique voluptatibus? Unde sapiente dolores iure et eveniet voluptatum.</p>
                </div>
            </div>
            <div className={styles.competitionLayer}>
                <div className={styles.competitionContent2}>
                    <h5>ROBOCON</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi tenetur expedita. Officiis qui, quos ratione similique incidunt error voluptatum explicabo. Blanditiis ullam fugiat saepe itaque quos dolor quibusdam cupiditate enim est ducimus similique, quaerat, maiores reiciendis quam accusantium corporis odio hic dignissimos minima harum quae sunt fuga nisi optio! Totam repudiandae ad cum maxime? Soluta illo saepe provident? Deserunt, excepturi aperiam unde, quam nulla reiciendis impedit ipsam temporibus debitis possimus accusantium quidem eius libero enim obcaecati corporis vel. Libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut debitis facilis id, natus dicta illum ab alias impedit delectus libero cupiditate ex consectetur quaerat soluta repellendus itaque expedita, ea obcaecati similique voluptatibus? Unde sapiente dolores iure et eveniet voluptatum.</p>
                </div>
                <div className={styles.competitionImg}>
                    <img src={Img1} alt="" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Achievements