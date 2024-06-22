import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../Shared/Color'

function HeadlineList({ newsList }) {
    return (
        <View>
            <View>
                <FlatList
                    data={newsList}
                    renderItem={({ item }) => (
                        <View>
                            <View style={{ height: 1, backgroundColor: Color.lightGray }}></View>
                            <TouchableOpacity style={{ marginTop: 15, display: 'flex', flexDirection: 'row' }}>
                                <Image source={{ uri: item.urlToImage }}
                                    style={{ width: 100, height: 100 }} />
                                <View style={{ marginRight: 135, marginLeft: 10 }}>
                                    <Text numberOfLines={4} style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                                    <Text style={{ color: Color.primary }}>{item?.source?.name}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )} />
            </View>
        </View>
    )
}

export default HeadlineList