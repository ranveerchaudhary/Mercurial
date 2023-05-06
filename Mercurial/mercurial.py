'''
    Module made for music recommendation
'''
import pandas as pd
import numpy as np
import warnings
import random as rd

warnings.filterwarnings("ignore")

df1 = pd.read_csv("dataset.csv")

usedtracks = []

def get_track():
    track_no = rd.randint(0, len(df1.index))
    
    while (track_no in usedtracks):
        track_no = rd.randint(0, len(df1.index))
    
    usedtracks.append(track_no)
    track = df1.iloc[track_no]
    track_name = track["name"]
    artist_name = track["artists"].strip('][').replace("\'", "").split(",")
    if(len(artist_name) > 3):
        artist_name = [artist_name[0], artist_name[1], artist_name[2]]
    return {"track_name": track_name, "artist_name": artist_name}



def recommend(songs_list):
    recommendations = []
    for song_name in songs_list:
        distance = []
        song = df1[(df1.name.str.lower() == song_name.lower())].head(1).values[0]
        rec = df1[df1.name.str.lower() != song_name.lower()]
        for songs in rec.values:
            d = 0
            for col in np.arange(len(rec.columns)):
                if not col in [0, 1, 5, 6, 7]:
                    d = d + np.absolute(float(song[col]) - float(songs[col]))
            distance.append(d)
        rec['distance'] = distance
        rec = rec.sort_values('distance').head(2)
        columns = ['artists','name']
        recommendations.append(rec[columns])
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
