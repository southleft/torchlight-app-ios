import React, { useState, useEffect, useCallback } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import * as WebBrowser from 'expo-web-browser';
import backgroundImg from './assets/bannerimg.png';
import logoChild from './assets/logo-child.png';
import logoElder from './assets/logo-elder.png';
import digitalEguides from './assets/digital-eguides.png';
import downloadableTools from './assets/downloadable-tools.png';
import expertAdvising from './assets/expert-advising.png';
import expertQa from './assets/expert-qa.png';
import informativePodcasts from './assets/informative-podcasts.png';
import ondemandWebinars from './assets/ondemand-webinars.png';

export default function Homepage({ navigation }) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ScrollView onLayout={onLayoutRootView}>
      <View style={styles.container}>
        <ImageBackground style={styles.heroImage} source={backgroundImg}>
          <View style={styles.horizLine}></View>
          <Text style={styles.bannerText}>
            Explore your free Torchlight benefit today.
          </Text>
        </ImageBackground>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.buttonLeft, styles.button]}
            onPress={this._handleOpenWithWebBrowser(
              'https://child.torchlight.care/login'
            )}
            activeOpacity={0.8}>
            <View style={styles.logoContainer}>
              <Image source={logoChild} style={styles.logo} />
            </View>
            <Text style={styles.buttonBody}>I'm a parent or guardian.</Text>
            <Text style={styles.buttonCta}>{'Explore Now >'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonRight, styles.button]}
            onPress={this._handleOpenWithWebBrowser(
              'https://elder.torchlight.care/login'
            )}
            activeOpacity={0.8}>
            <View style={styles.logoContainer}>
              <Image source={logoElder} style={styles.logo} />
            </View>
            <Text style={styles.buttonBody}>I'm a caregiver for an adult.</Text>
            <Text style={styles.buttonCta}>{'Explore Now >'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            Torchlight illuminates the way for working parents and caregivers.
          </Text>
          <LinearGradient
            colors={['transparent', '#E3E3E3']}
            locations={[0.3, 1]}
            style={styles.iconColumns}>
            <View style={[styles.iconColumn, styles.columnLeft]}>
              <Image style={styles.icon} source={digitalEguides} />
              <Image style={styles.icon} source={informativePodcasts} />
              <Image style={styles.icon} source={expertQa} />
            </View>
            <View style={[styles.iconColumn, styles.columnRight]}>
              <Image style={styles.icon} source={ondemandWebinars} />
              <Image style={styles.icon} source={expertAdvising} />
              <Image style={styles.icon} source={downloadableTools} />
            </View>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
}
_handleOpenWithWebBrowser = (url) => {
  WebBrowser.openBrowserAsync(url);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroImage: {
    flex: 1,
    width: '100%',
    height: 220,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    resizeMode: 'cover',
    overflow: 'visible',
  },
  horizLine: {
    marginTop: 17,
    flex: 0,
    backgroundColor: 'white',
    width: '70%',
    height: 1,
    marginLeft: 17,
    marginRight: 70,
  },
  bannerText: {
    flex: 1,
    paddingTop: 15,
    color: 'white',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'left',
    textAlignVertical: 'top',
    alignSelf: 'flex-start',
    marginLeft: 17,
    width: '70%',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginTop: -80,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    paddingLeft: 5,
    paddingBottom: 10,
    paddingRight: 5,
    flex: 1,
    opacity: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 40,
    shadowRadius: 15,
    elevation: 9,
  },
  buttonLeft: {
    backgroundColor: '#017092',
    marginRight: 15,
  },
  buttonRight: {
    backgroundColor: '#447945',
    marginLeft: 15,
  },
  logoContainer: {
    backgroundColor: 'white',
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 9,
    paddingBottom: 9,
  },
  logo: {
    width: 99,
    height: 40,
  },
  buttonBody: {
    color: 'white',
    fontSize: 20,
    lineHeight: 26,
    marginTop: 6,
    marginBottom: 6,
    textAlign: 'center',
  },
  buttonCta: {
    flex: 1,
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  body: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 25,
  },
  bodyText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold',
    color: '#225E73',
    marginLeft: 24,
    marginRight: 24,
  },
  iconColumns: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconColumn: {
    marginTop: 24,
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
  },
  columnLeft: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 12,
  },
  columnRight: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 12,
  },
  icon: {
    width: 113,
    height: 94,
    alignItems: 'center',
    marginBottom: 18,
  },
});
