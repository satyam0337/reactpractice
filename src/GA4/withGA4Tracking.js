import { ReactGAImplementation} from "react-ga4";
import { useEffect } from "react";

const withGA4Tracking = (WrappedComponent) => {


  const WithGA4Tracking = (props) => {
    useEffect(() => {
        ReactGAImplementation.initialize("G-GNKR5KPJHR");
        ReactGAImplementation.pageview(window.location.pathname + window.location.search);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithGA4Tracking;
};

export default withGA4Tracking;
