!function(t){t.fn._vs.chart.CircleLayout=function(t,e,s){function i(t,e,s,i){j=t*Math.PI/180;var n=Math.cos(j)*e+s,a=Math.sin(j)*e+i,o={x:n,y:a};return o}function n(e,s,i,n){var a=t.settings.options.scale,o=new t.phy.b2FixtureDef;o.density=1,o.friction=.5,o.restitution=.2;var r=new t.phy.b2BodyDef;o.shape=new t.phy.b2CircleShape(i/a),r.position.Set(e/a,s/a);var l=t.world.CreateBody(r).CreateFixture(o);return l.m_userData={type:"wall",familyID:null,fillStyle:n,strokeStyle:n,r:i},l}function o(e,s,i,n){console.log("CreatMyBubblePivot",e,s,i,n);var a=t.settings.options.scale,o=new t.phy.b2FixtureDef,r=d3.scale.category10();o.density=1e4,o.friction=0,o.restitution=0;var l=new t.phy.b2BodyDef;o.shape=new t.phy.b2CircleShape(i*a),l.position.Set(e/a,s/a);var h=t.world.CreateBody(l),g=h.CreateFixture(o);return console.log(n,r(n)),g.m_userData={type:"BubblePivot",familyID:n,fillStyle:t.settings.chart.wallColor},console.log(n,g),g.m_shape.m_radius=t.settings.data.model[n].value/a,g}var r,l,t,h=[],g=0;if(this.init=function(t){console.log("Circle Layout Init"),this._this=t,gravity=new t.phy.b2Vec2(0,0),t.world.m_gravity=gravity,t.chartPhySetup={grounds:[],wall:[]},this.treeLayout=t.settings.chart.treeLayout;for(var e=0;e<t.settings.data.model.length;e++)t.settings.data.strata[e][0].value=t.settings.data.strata[e][0].initValue;for(var e=0;e<t.settings.data.model.length;e++){t.settings.data.model[e].value=0;for(var s=0;s<t.settings.data.strata[e].length;s++)t.settings.data.model[e].value+=t.settings.data.strata[e][s].value;h.push(t.settings.data.model[e].value),g+=t.settings.data.model[e].value}this.treeLayout?(console.log("ici"),this.setupBubbleChartPhysics(t)):this.setupPieChartPhysics(t)},this.setupPieChartPhysics=function(t){console.log("w",t.settings.width);var e=t.settings.chart.radius;r=t.settings.chart.width/2+t.settings.chart.x,l=t.settings.chart.height/2+t.settings.chart.y;for(var s=(n(r,l,e,t.settings.chart.wallColor),0);s<t.settings.data.model.length;s++)t.settings.sedimentation.incoming.target[s]={x:r,y:l};var o=t.settings.chart.spacer,y=0;if(console.log("tdv",g),0==g){for(var s=0;s<t.settings.data.length;s++)h[s]=1;g=h.length}for(var s=0;s<h.length;s++)v=h[s],a2=(v/2+y)/g*360-90,y+=v,a=y/g*360-90,c=i(a2,5*e,r,l),console.log(c),t.settings.sedimentation.incoming.point[s]=c,t.chartPhySetup.grounds[s]=this.createBox(t,r,l,o,e,a,e,"wall",t.settings.chart.wallColor);console.log("w",t.settings.chart.width)},this.update=function(t,e){console.log("update");e.r-=90;var s=(e.r+90)*(Math.PI/180),n=i(e.r,t.settings.chart.radius,t.settings.chart.width/2+t.settings.chart.x,t.settings.chart.height/2+t.settings.chart.y);if(null!=t.chartPhySetup.grounds[e.cat]){var a=t.chartPhySetup.grounds[e.cat].GetBody(),o=a.GetWorldCenter(),r=a.GetAngle();o.y=n.y/t.settings.options.scale,o.x=n.x/t.settings.options.scale,r=s,a.SetPosition(o),a.SetAngle(r)}},this.token=function(t,e){var s=e,i={x:t.settings.sedimentation.incoming.point[s].x+2*Math.random(),y:t.settings.sedimentation.incoming.point[s].y+1*Math.random(),t:t.now(),size:t.settings.sedimentation.token.size.original,category:s,phy:{density:10,friction:0,restitution:0},targets:[{x:t.settings.sedimentation.incoming.target[s].x,y:t.settings.sedimentation.incoming.target[s].y}]};return i},this.createBox=function(t,e,s,n,a,o,r,l,h){var g=t.settings.options.scale,c=new t.phy.b2FixtureDef,y=i(o,r,e,s);c.density=1,c.friction=.5,c.restitution=.2;var d=new t.phy.b2BodyDef,u=(o+90)*(Math.PI/180);d.angle=u,d.type=t.phy.b2Body.b2_staticBody,c.shape=new t.phy.b2PolygonShape,c.shape.SetAsBox(n/g,a/g),d.position.Set(y.x/g,y.y/g);var p=t.world.CreateBody(d).CreateFixture(c);return p.m_userData={type:l,fillStyle:h,w:n,h:a,r:r},p},this.getPosition=function(t){for(var e=[],s=0;s<t.chartPhySetup.grounds.length;s++)myElement=t.chartPhySetup.grounds[s],myBody=myElement.GetBody(),e.push({x:myBody.GetWorldCenter().x*t.settings.options.scale,y:myBody.GetWorldCenter().y*t.settings.options.scale,a:myBody.GetAngle(),w:myElement.m_userData.w,h:myElement.m_userData.h,r:myElement.m_userData.r});return e},this.setupBubbleChartPhysics=function(t){console.log("setupBubbleChartPhysics");for(var e=(t.settings.chart.width/t.settings.data.model.length,t.settings.chart.spacer),s=(t.settings.chart.height/2+t.settings.y+e,0),i=0,a=t.settings.chart.column,r=0;r<t.settings.data.model.length;r++)i=t.settings.chart.x+r%a*e+e/2,s=t.settings.chart.y+Math.floor(r/a)*e+e/2,t.settings.sedimentation.incoming.target[r]={x:i,y:s},n[r]=o(i,s,t.settings.chart.spacer,r),t.settings.data.model[r].incomingPoint={x:i,y:s}},this.getPivotPosition=function(e){if("undefined"!=typeof e)return this.pivot;for(var s=[],i=0;i<t.settings.data.model.length;i++)s.push(t.settings.data.model[i]);return s},void 0!=typeof e){var y=this[e](t,s);if(void 0!=typeof y)return y}}}(jQuery);