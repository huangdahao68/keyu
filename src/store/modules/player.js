let mode = 0;
const playMode = {
  sequence: 0,//顺序播放
  loop: 1,//单曲循环
  random: 2//随机播放
}
// 仓库的音乐播放器相关的状态
export default {
  namespaced: true,
  state: {
    // 是否要全屏播放
    fullScreen: false,
    // 当前音乐是否在播放
    playing: false,
    // 播放歌曲列表
    playList: [],
    // 顺序歌曲列表,原始的歌单列表
    sequencePlayList: [],
    // 播放模式
    mode: playMode.sequence,
    // 当前播放歌曲在歌曲列表中的下标
    currentIndex: -1,
  },
  getters: {
    // 当前歌曲信息
    currentSong(state){
      if(state.currentIndex >=0 && state.currentIndex < state.sequencePlayList.length){
        // 选中了歌曲要播放
        return state.sequencePlayList[state.currentIndex];
      }else{
        // 没有选中歌曲要播放
        return {};
      }
    }
  },
  mutations: {
    // 歌单中点击歌曲后的处理事件
    selectSongByIndex(state, payload){
      console.log(payload);
      // 设置歌曲的下标
      state.currentIndex = payload.index;
      // 歌单列表的原始数据需要一直保留，不能被其他事件影响到歌单顺序。
      state.sequencePlayList = [...payload.list];
      // 播放音乐
      state.playing = true;
    },
    // 修改播放状态
    setPlaying(state, payload){
      state.playing = payload.value;
    },
	//修改是否为全屏播放
	setFullScreen(state, payload){
	  state.fullScreen = payload.value;
	},
	//切换播放模式
	changePlayMode(state){
		mode += 1;
		state.mode = mode % 3;
	}
  },
  actions: {

  }
}