import type { FC } from 'react';
import styles from '@Components/Home/Home.module.css';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { useLinkStorage } from '@Services/storageAdapter';
import Dropzone from '@Components/Dropzone';
import URLFrame from '@Components/generic/URLFrame';
import { MainPaths } from '@Enums/paths/main-paths.enum';

const Home: FC = () => {
  const { link } = useLinkStorage();

  return (
    <>
      <Helmet>
        <title>Send your files | Sendfiles</title>
      </Helmet>
      <div className="App-wrapper">
        {link ? <URLFrame url={link.url} /> : <Dropzone />}

        <div className={styles.summaryWrapper}>
          <h3 className="h3">Share your files easily and privately</h3>
          <p>
            <span className="normal-bold">Sendfiles</span> allows you to share
            files with end-to-end encryption and a file that is deleted after
            downloading. So you can keep what you share private and make sure
            your stuff doesn't stay online forever.
          </p>
          <Link href={MainPaths.LOGIN}>
            <a className="normal-bold">Sign up to obtain more privileges</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
