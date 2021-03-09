import { StyleSheet } from "react-native";

export const standardsStylesObject = {
  backgroundColor: "white",
  borderColor: "grey",
  color: "black",
  borderRadius: 5,
  borderWidth: 0.5,
  fontSizeNormal: 17,
};

const styles = StyleSheet.create({
  StandardText: {
    fontSize: standardsStylesObject.fontSizeNormal,
    padding: 6,
  },
  StandardContainer: {
    borderRadius: standardsStylesObject.borderRadius,
    borderColor: standardsStylesObject.borderColor,
    marginLeft: 10,
    marginRight: 10,
  },
  _musicplayer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    // marginTop: 20,
    // marginBottom: 19,
    width: "100%",
    alignSelf: "center",
    // shadowColor: "red",
    // shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 10,
    // elevation: 3,
    // backgroundColor: "#030D18",
    // paddingHorizontal: 10,
    // borderRadius: 15,
    // paddingBottom: 10,
    // position:"relat"
    // borderBottomColor: '#1e2b35',
    // borderBottomWidth: 1,
    // borderTopColor: '#1e2b35',
    // borderTopWidth: 1,
    // paddingTop: 20,
   

  },
  _player_heading: {
    // justifyContent: "center",
    alignItems: "center",
    padding: 0,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#1e2b35",
    height: 18,
    width: 52,
    // marginTop:12,
    
  },
  View_more:{
    alignItems: "center",
    padding: 0,
    justifyContent: "center",
    paddingHorizontal: 5,
    borderRadius: 20,
    // backgroundColor: "#E5E5E5",
    borderColor: 'gray',
    borderWidth: 1
    // height: 18,
    // width: 52,
  },
  _music_inner_view: {
    flexDirection: "row",
    // justifyContent: "space-between",
    paddingVertical: 0,
  },
  _music_inner_view2: {
    flexDirection:'row-reverse',
    flex:2,
    paddingVertical: 10,
    width:10,
    
  },
  _jazlabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
    
  },
  _music_name: {
    flex: 5,
    fontSize: 16,
    color: 'white',
    marginTop:-1,
    // justifyContent: 'space-between'
    flexDirection:'row',
    marginHorizontal:14
  },
  _music_ownder: {
    color: "grey",
  },
  _seemoreless: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 10,
    color: "#8F8F8F",
    fontWeight: "bold",
    // width: "100,
  },

  _more_icon: {
    alignSelf: "center",
    marginTop: -5,
    color: "#8F8F8F",
  },
  _data_row: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    marginVertical: 8,
  },
  _row: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    marginHorizontal:10,
    justifyContent: 'space-around'
    
  },
  _name: {
    fontSize: 12,
    flex: 1,
    // width: "40%",
    flexDirection: "row",
    flexWrap: "wrap",
    color: '#fff'
  },
  _ownder_name:{
flexDirection: 'row',
marginBottom:9,
marginHorizontal:9
  },
  _google_icon:{
    width: 15,
    height:15,
marginVertical:2,
marginHorizontal: 6,
borderRadius: 20

  },
  _music_name_v:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;
