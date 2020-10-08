function renderMeter(){
	 s1 = [3.5];

                      plot4 = $.jqplot('chart4', [s1], {
                          seriesDefaults: {
                              renderer: $.jqplot.MeterGaugeRenderer,
                              rendererOptions: {
                                  label: 'Current GPA Estimate',
                                  labelPosition: 'bottom',
                                  labelHeightAdjust: -5,
                                  intervalOuterRadius: 85,
                                  ticks: [0,1,2,3,4,5],
                                  intervals: [0.5,1.5,2.5,3.5,4.5,5],
                                  intervalColors: ['#66cc66', '#E7E658', '#cc6666']
                              }
                          }
                      });
					  
}