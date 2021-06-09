//import '../styles/globals.css'
import "../assets/css/bootstrap.min.css";
//import 'bootstrap/dist/css/bootstrap.min.css'
import "../assets/css/fontawsom-all.min.css";
import "../assets/plugins/image-hover/imagehover.min.css";
import "../assets/css/animate.css";
import "../assets/css/style.css";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
