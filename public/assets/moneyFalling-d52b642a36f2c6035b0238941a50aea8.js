
  mySettings = {
    width:900,
    height:700,
    data: { 
      "model":[ {label:"Column B"} ],
      "strata":[[ {
        initValue: 20, 
        label: "Strata 1 col B"
      }]],
    // start of automatic token generator 
    stream:{ provider:0},
    },
    sedimentation:{
      // TOKENS ARE THE BALLS THAT DROP
      token:{
        size:{original:20},
      },
      aggregation:{height:1},
      suspension:{
        decay:{power:1.001}
      }
    },
    options:{
      layout:false
    },
    chart:{
    }
  }
  // Init the sedimentation library
  var barChart = $("#myDemo").vs(mySettings).data('visualSedimentation');
