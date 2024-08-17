import { Text, View } from 'react-native'
import React from 'react';

interface NearestBarShopListProps {
    data: [

    ]
};

const NearestBarShopList = (props: NearestBarShopListProps) => {
  return (
    <View>
      {/* Image */}
      {/* row Container */}
      <View>
        {/* Bar Name */}
        <Text></Text>
        {/* Icon & Location */}
        <View>
            {/* Icon */}
            {/* Location Name */}
        </View>
        
        {/* Icon & Points Like  */}
        <View>
            {/* Icon */}
            {/* Points Like */}
            <Text></Text>
        </View>
      </View>

    </View>
  )
}

export default NearestBarShopList;