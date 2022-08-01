import { useEffect } from 'react';

const Home = () => {



    // useEffect(() => {
    //     const script = document.createElement('script');
      
    //     script.src = "https://use.typekit.net/foobar.js";
    //     script.async = true;
      
    //     document.body.appendChild(script);
      
    //     return () => {
    //       document.body.removeChild(script);
    //     }
    //   }, []);

    const share = () => {
        let uuid = 'skufdhgsuf'
        let message = `some message https://stackoverflow.com/questions/21935149/sharing-link-on-whatsapp-from-mobile-website-not-application-for-android${uuid}`
  
            window.open(
                "whatsapp://send?text=" + message,
                '_blank' 
            );
    } 

    const shareTwitter = () => {
        let message = ' some message https://stackoverflow.com/questions/21935149/sharing-link-on-whatsapp-from-mobile-website-not-application-for-android'
  
            window.open(
                "messenger://send?text=" + message,
                '_blank' 
            );
    } 
    return (
    <div>
        <div id="fb-root"></div>
        <script async defer src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0" nonce="KbzrmjvN"></script>
        <button onClick={share}>share in whatsapp</button>
        <button onClick={shareTwitter}>share in twitter</button>
        <div className="fb-share-button" data-href="https://stackoverflow.com/questions/21935149/sharing-link-on-whatsapp-from-mobile-website-not-application-for-android" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F21935149%2Fsharing-link-on-whatsapp-from-mobile-website-not-application-for-android&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
     </div>
        );
}

export default Home