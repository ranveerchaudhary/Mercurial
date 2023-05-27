'''
    Module made for music recommendation
'''
import pandas as pd
import numpy as np
import warnings
import random as rd
from sklearn.cluster import KMeans

warnings.filterwarnings("ignore")

df1 = pd.read_csv("dataset.csv")

kmeansplus = KMeans(n_clusters=4, init='k-means++', random_state=42)
data = df1.select_dtypes(include='number')
kmeansplus.fit(data)
data = df1.select_dtypes(include='number')
kmeansplus.fit(data)

usedtracks = []

def get_track():
    #track_no = rd.choice(listr)
    track_no = rd.randint(0, len(df1.index))
    
    while (track_no in usedtracks):
        track_no = rd.randint(0, len(df1.index))
        #track_no = rd.choice(listr)
    
    usedtracks.append(track_no)
    #track_no = df1[df1['id'] == track_no].index[0]
    track = df1.iloc[track_no]
    track_name = track["name"]
    artist_name = track["artists"].strip('][').replace("\'", "").split(",")
    if(len(artist_name) > 3):
        artist_name = [artist_name[0], artist_name[1], artist_name[2]]
    return {"track_name": track_name, "artist_name": artist_name}



def recommend(songs_list, amount=5):
    global data
    recommendations = []

    for song_name in songs_list:
        song = df1[(df1.name.str.lower() == song_name.lower())].head(1).iloc[0]
        song_features = song[data.columns]
        cluster_label = kmeansplus.predict([song_features])[0]

        cluster_indices = np.where(kmeansplus.labels_ == cluster_label)[0]
        cluster_songs = df1.iloc[cluster_indices]
        cluster_songs = cluster_songs[cluster_songs.name.str.lower() != song_name.lower()]

        recommendations.append(cluster_songs) 

    recommendations = pd.concat(recommendations, ignore_index=True)
    reco = list(zip(recommendations["artists"].tail(), recommendations["name"].tail()))

    artist = []
    music = []
    data = {}
    for z in range(len(reco)):
        artist.append(reco[z][0])
        music.append(reco[z][1])
    for q in range(len(artist)):
        artist[q] = artist[q].strip('][').replace("\'", "").split(",")

    for k in range(len(artist)):
        data[music[k]] = artist[k]

    return data
