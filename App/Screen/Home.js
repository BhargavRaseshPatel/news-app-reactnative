import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

function Home() {
    const [newsList, setNewsList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // getTopHeadline()
        getNewsByCategory('latest')
    }, [])

    const getTopHeadline = async () => {
        const result = (await GlobalApi.getTopHeadline).data;
        setNewsList(result.articles)
    }

    const getNewsByCategory = async (category) => {
        setLoading(true)
        const result = (await GlobalApi.getByCategory(category)).data
        setNewsList(result.articles)
        setLoading(false)
    }
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.appName}>Today's News</Text>
                <Ionicons name="notifications-outline" size={25} color="black" />
            </View>
            <CategoryTextSlider selectCategory={(category) => getNewsByCategory(category)} />
            {loading ? <ActivityIndicator size={'large'} color={Color.primary} style={{marginTop:Dimensions.get('screen').height*0.40}} /> :
                <View>
                    <TopHeadlineSlider newsList={newsList} />

                    <HeadlineList newsList={newsList} />
                </View>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Color.primary,
    }
})
export default Home