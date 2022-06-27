import React, { useState } from 'react';
import { Button, View } from 'react-native';
import Animated, { Easing, Keyframe } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

export function OlympicAnimation(): React.ReactElement {
  const [show, setShow] = useState(true);

  const blueRingAnimation = new Keyframe({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })
    .delay(600)
    .duration(300);

    const blueRingExitAnimationBounce = new Keyframe({
      from: {
        zIndex: 2,
        transform: [{ translateX: 0 }, { translateY: 0 }, { scale: 1 }],
      },
      10: {
        transform: [{ translateX: 0 }, { translateY: 0 }, { scale: 2 }],
        easing: Easing.quad,
      },
      20: {
        transform: [{ translateX: 0 }, { translateY: 0 }, { scale: 1 }],
        easing: Easing.out(Easing.exp),
      },
    }).duration(3000);

    const blueRingExitAnimation = new Keyframe({
    from: {
      zIndex: 2,
      opacity: 1,
      transform: [{ translateX: -13 }, { translateY: 0 }, { scale: 1 }],
    },
    10: {
      opacity: 1,
      transform: [{ translateX: 22 }, { translateY: 30 }, { scale: 1 }],
    },
    20: {
      opacity: 1,
      transform: [{ translateX: 57 }, { translateY: 0 }, { scale: 1 }],
    },
    30: {
      opacity: 1,
      transform: [{ translateX: 92 }, { translateY: 30 }, { scale: 1 }],
    },
    40: {
      opacity: 1,
      transform: [{ translateX: 127 }, { translateY: 0 }, { scale: 1 }],
    },
    50: {
      opacity: 1,
      transform: [{ translateX: 57 }, { translateY: 0 }, { scale: 1 }],
    },
    60: {
      opacity: 0,
      transform: [{ translateX: 1100 }, { translateY: 1100 }, { scale: 20 }],
      easing: Easing.quad,
    },
  }).duration(3000);

  return (
    <>
      <Button title="show" onPress={() => setShow((prev) => !prev)} />
      {show && (
        <View>
          <Animated.View
            entering={blueRingAnimation}
            exiting={blueRingExitAnimationBounce}
            style={{ transform: [{ translateX: -13 }] }}>
            <Svg width={500} height={500}>
              <Path
                fill="none"
                stroke="#2A5AA6"
                strokeWidth={5}
                strokeMiterlimit={10}
                d="M106.9 180.7c6.3-14.9 23.4-21.9 38.3-15.6 14.9 6.3 21.9 23.4 15.6 38.3-6.3 14.9-23.4 21.9-38.3 15.6-10.8-4.6-17.9-15.2-17.9-26.9 0-3.9.8-7.8 2.3-11.4"
              />
            </Svg>
          </Animated.View>
        </View>
      )}
    </>
  );
}
