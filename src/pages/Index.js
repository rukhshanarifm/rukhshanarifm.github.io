import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Your Data Buddies"
      + ''
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            Who are we?
          </h2>
        </div>
      </header>
      <p>At Your Data Buddies (YDB), we help organizations make meaningful decisions with their data. Whether it’s crafting a data roadmap, creating dashboards, setting up data systems, or moving to the cloud, we make data simpler and more useful. If you’re looking for support in building data capacity, whether through strategy, dashboards, or infrastructure, let’s connect!</p>
      <h3>List of Services:</h3>
      <ul>
        <li><strong>Data Strategy</strong>: We help organizations develop a clear data strategy that aligns with their goals and objectives. This includes identifying key performance indicators (KPIs), defining data governance policies, and creating a roadmap for data initiatives.</li>
        <li><strong>Data Engineering</strong>: We design and implement data pipelines that ensure data is collected, stored, and processed efficiently. This includes ETL (Extract, Transform, Load) processes, data warehousing, and data integration.</li>
        <li><strong>Data Visualization</strong>: We create interactive dashboards and reports that help organizations visualize their data and gain insights. This includes using tools like Tableau, Power BI, and Looker.</li>
        <li><strong>Data Science</strong>: We apply advanced analytics and machine learning techniques to help organizations extract insights from their data. This includes predictive modeling, clustering, and natural language processing.</li>
        <li><strong>Training & Capacity Building</strong>: We provide tailored training to help your team develop a strong data mindset and enhance their analytical skills. Whether it’s teaching data visualization, strategy, or engineering best practices, we empower organizations to become more self-sufficient in handling their data.</li>
      </ul>
      <h3>Why Choose Us? Hello</h3>
      <ul>
        <li>Get the right expertise for your data needs: efficient pipelines, accurate insights, and clear visualizations. We turn raw data into real impact.</li>
        <li>We adapt to your needs, ensuring a tailored approach that fits your unique data challenges and goals.</li>
        <li>With experience working across multiple countries and cultural contexts, we understand the unique challenges of global data.</li>
        <li>We support you at every stage, from data collection to actionable insights, ensuring a seamless end-to-end experience.</li>
      </ul>
      {/* <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/rukhshanarifm/personal-site">here</a>.
      </p> */}
    </article>
  </Main>
);

export default Index;
