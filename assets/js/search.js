
var documents = [{
    "id": 0,
    "url": "https://byteshiva.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://byteshiva.github.io/about/",
    "title": "About Me",
    "body": "This is where you put the contents of your About page. Like all your pages, it’s in Markdown format. This website is powered by fastpages 1.       a blogging platform that natively supports Jupyter notebooks in addition to other formats.  &#8617;    "
    }, {
    "id": 2,
    "url": "https://byteshiva.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://byteshiva.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 4,
    "url": "https://byteshiva.github.io/2020/02/27/Diagram-as-Code.html",
    "title": "Title",
    "body": "2020/02/27 -           Diagram as Code&#182;Diagram as Code allows you to tracking the architecture diagram changes on any version control system.       from diagrams import Diagramfrom diagrams. aws. compute import EC2with Diagram(&quot;Simple Diagram&quot;) as diag:  EC2(&quot;web&quot;)diag          pip install diagrams  Collecting diagrams Downloading https://files. pythonhosted. org/packages/59/41/24fbab973c1449faefd09a3197cb11311971df6db05ade2d15d554b7d8ef/diagrams-0. 6. 3-py3-none-any. whl (8. 8MB)   |████████████████████████████████| 8. 8MB 2. 5MB/s Collecting contextvars&lt;3. 0,&gt;=2. 4; python_version &gt;= &#34;3. 6&#34; and python_version &lt; &#34;3. 7&#34; Downloading https://files. pythonhosted. org/packages/83/96/55b82d9f13763be9d672622e1b8106c85acb83edd7cc2fa5bc67cd9877e9/contextvars-2. 4. tar. gzCollecting graphviz&lt;0. 14. 0,&gt;=0. 13. 2 Downloading https://files. pythonhosted. org/packages/f5/74/dbed754c0abd63768d3a7a7b472da35b08ac442cf87d73d5850a6f32391e/graphviz-0. 13. 2-py2. py3-none-any. whlRequirement already satisfied: jinja2&lt;3. 0,&gt;=2. 10 in /usr/local/lib/python3. 6/dist-packages (from diagrams) (2. 11. 1)Collecting immutables&gt;=0. 9 Downloading https://files. pythonhosted. org/packages/62/cc/3961b18a1a689a7e3232d923a8546cb901c49b4a33be6987c03a89175c4f/immutables-0. 11-cp36-cp36m-manylinux1_x86_64. whl (92kB)   |████████████████████████████████| 102kB 6. 6MB/s Requirement already satisfied: MarkupSafe&gt;=0. 23 in /usr/local/lib/python3. 6/dist-packages (from jinja2&lt;3. 0,&gt;=2. 10-&gt;diagrams) (1. 1. 1)Building wheels for collected packages: contextvars Building wheel for contextvars (setup. py) . . . done Created wheel for contextvars: filename=contextvars-2. 4-cp36-none-any. whl size=7666 sha256=c200628de2974404757d0f52fff9f5fedc667bb391a842d8e356f0bc2748bcc8 Stored in directory: /root/. cache/pip/wheels/a5/7d/68/1ebae2668bda2228686e3c1cf16f2c2384cea6e9334ad5f6deSuccessfully built contextvarsInstalling collected packages: immutables, contextvars, graphviz, diagrams Found existing installation: graphviz 0. 10. 1  Uninstalling graphviz-0. 10. 1:   Successfully uninstalled graphviz-0. 10. 1Successfully installed contextvars-2. 4 diagrams-0. 6. 3 graphviz-0. 13. 2 immutables-0. 11        from diagrams import Cluster, Diagramfrom diagrams. aws. compute import ECSfrom diagrams. aws. database import ElastiCache, RDSfrom diagrams. aws. network import ELBfrom diagrams. aws. network import Route53with Diagram(&quot;Clustered Web Services&quot;, show=False) as diag_clus_webservices:  dns = Route53(&quot;dns&quot;)  lb = ELB(&quot;lb&quot;)  with Cluster(&quot;Services&quot;):    svc_group = [ECS(&quot;web1&quot;),           ECS(&quot;web2&quot;),           ECS(&quot;web3&quot;)]  with Cluster(&quot;DB Cluster&quot;):    db_master = RDS(&quot;userdb&quot;)    db_master - [RDS(&quot;userdb ro&quot;)]  memcached = ElastiCache(&quot;memcached&quot;)  dns &gt;&gt; lb &gt;&gt; svc_group  svc_group &gt;&gt; db_master  svc_group &gt;&gt; memcacheddiag_clus_webservices          from diagrams import Cluster, Diagramfrom diagrams. aws. compute import ECS, EKS, Lambdafrom diagrams. aws. database import Redshiftfrom diagrams. aws. integration import SQSfrom diagrams. aws. storage import S3with Diagram(&quot;Event Processing&quot;, show=False) as Event_Processing_on_AWS:  source = EKS(&quot;k8s source&quot;)  with Cluster(&quot;Event Flows&quot;):    with Cluster(&quot;Event Workers&quot;):      workers = [ECS(&quot;worker1&quot;),            ECS(&quot;worker2&quot;),            ECS(&quot;worker3&quot;)]    queue = SQS(&quot;event queue&quot;)    with Cluster(&quot;Processing&quot;):      handlers = [Lambda(&quot;proc1&quot;),            Lambda(&quot;proc2&quot;),            Lambda(&quot;proc3&quot;)]  store = S3(&quot;events store&quot;)  dw = Redshift(&quot;analytics&quot;)  source &gt;&gt; workers &gt;&gt; queue &gt;&gt; handlers  handlers &gt;&gt; store  handlers &gt;&gt; dwEvent_Processing_on_AWS          from diagrams import Cluster, Diagramfrom diagrams. gcp. analytics import BigQuery, Dataflow, PubSubfrom diagrams. gcp. compute import AppEngine, Functionsfrom diagrams. gcp. database import BigTablefrom diagrams. gcp. iot import IotCorefrom diagrams. gcp. storage import GCSwith Diagram(&quot;Message Collecting&quot;, show=False) as Message_Collecting_System_on_GCP:  pubsub = PubSub(&quot;pubsub&quot;)  with Cluster(&quot;Source of Data&quot;):    [IotCore(&quot;core1&quot;),     IotCore(&quot;core2&quot;),     IotCore(&quot;core3&quot;)] &gt;&gt; pubsub  with Cluster(&quot;Targets&quot;):    with Cluster(&quot;Data Flow&quot;):      flow = Dataflow(&quot;data flow&quot;)    with Cluster(&quot;Data Lake&quot;):      flow &gt;&gt; [BigQuery(&quot;bq&quot;),           GCS(&quot;storage&quot;)]    with Cluster(&quot;Event Driven&quot;):      with Cluster(&quot;Processing&quot;):        flow &gt;&gt; AppEngine(&quot;engine&quot;) &gt;&gt; BigTable(&quot;bigtable&quot;)      with Cluster(&quot;Serverless&quot;):        flow &gt;&gt; Functions(&quot;func&quot;) &gt;&gt; AppEngine(&quot;appengine&quot;)  pubsub &gt;&gt; flowMessage_Collecting_System_on_GCP          from diagrams import Cluster, Diagramfrom diagrams. onprem. analytics import Sparkfrom diagrams. onprem. compute import Serverfrom diagrams. onprem. database import PostgreSQLfrom diagrams. onprem. inmemory import Redisfrom diagrams. onprem. logging import Fluentdfrom diagrams. onprem. monitoring import Grafana, Prometheusfrom diagrams. onprem. network import Nginxfrom diagrams. onprem. queue import Kafkawith Diagram(&quot;Advanced Web Service with On-Premise&quot;, show=False) as Advanced_Web_Service_with_On_Premise:  ingress = Nginx(&quot;ingress&quot;)  metrics = Prometheus(&quot;metric&quot;)  metrics &lt;&lt; Grafana(&quot;monitoring&quot;)  with Cluster(&quot;Service Cluster&quot;):    grpcsvc = [      Server(&quot;grpc1&quot;),      Server(&quot;grpc2&quot;),      Server(&quot;grpc3&quot;)]  with Cluster(&quot;Sessions HA&quot;):    master = Redis(&quot;session&quot;)    master - Redis(&quot;replica&quot;) &lt;&lt; metrics    grpcsvc &gt;&gt; master  with Cluster(&quot;Database HA&quot;):    master = PostgreSQL(&quot;users&quot;)    master - PostgreSQL(&quot;slave&quot;) &lt;&lt; metrics    grpcsvc &gt;&gt; master  aggregator = Fluentd(&quot;logging&quot;)  aggregator &gt;&gt; Kafka(&quot;stream&quot;) &gt;&gt; Spark(&quot;analytics&quot;)  ingress &gt;&gt; grpcsvc &gt;&gt; aggregatorAdvanced_Web_Service_with_On_Premise          from urllib. request import urlretrievefrom diagrams import Cluster, Diagramfrom diagrams. custom import Customfrom diagrams. aws. database import Aurorafrom diagrams. k8s. compute import Pod# Download an image to be used into a Custom Node classrabbitmq_url = &quot;https://jpadilla. github. io/rabbitmqapp/assets/img/icon. png&quot;rabbitmq_icon = &quot;rabbitmq. png&quot;urlretrieve(rabbitmq_url, rabbitmq_icon)with Diagram(&quot;Broker Consumers&quot;, show=False) as RabbitMQ_Consumers_with_Custom_Nodes:  with Cluster(&quot;Consumers&quot;):    consumers = [      Pod(&quot;worker&quot;),      Pod(&quot;worker&quot;),      Pod(&quot;worker&quot;)    ]  queue = Custom(&quot;Message queue&quot;, rabbitmq_icon)  queue &gt;&gt; consumers &gt;&gt; Aurora(&quot;Database&quot;)RabbitMQ_Consumers_with_Custom_Nodes    Reference :&#182;: https://diagrams. mingrammer. com/ How to run jupyter notebook locally&#182;:   $ git clone &lt;&lt;path-to-github&gt;&gt;  $ pip install jupyterlab  $ jupyter lab"
    }, {
    "id": 5,
    "url": "https://byteshiva.github.io/fastpages/jupyter/2020/02/20/test.html",
    "title": "Fastpages Notebook Blog Post",
    "body": "2020/02/20 -           About&#182;This notebook is a demonstration of some of capabilities of fastpages with notebooks. With fastpages you can save your jupyter notebooks into the _notebooks folder at the root of your repository, and they will be automatically be converted to Jekyll compliant blog posts! Front Matter&#182;: Front Matter is a markdown cell at the beginning of your notebook that allows you to inject metadata into your notebook. For example: Setting toc: true will automatically generate a table of contentsSetting badges: true will automatically include GitHub and Google Colab links to your notebook. Setting comments: true will enable commenting on your blog post, powered by utterances. More details and options for front matter can be viewed on the front matter section of the README. Markdown Shortcuts&#182;: put a #hide flag at the top of any cell you want to completely hide in the docs put a #collapse flag at the top of any cell if you want to hide that cell by default, but stil have it be visible to the reader:              #collapseimport pandas as pdimport altair as alt       put a #collapse_show flag at the top of any cell if you want to show that cell by default, but give the reader the option to hide it:              #collapse_showcars = &#39;https://vega. github. io/vega-datasets/data/cars. json&#39;movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;sp500 = &#39;https://vega. github. io/vega-datasets/data/sp500. csv&#39;stocks = &#39;https://vega. github. io/vega-datasets/data/stocks. csv&#39;flights = &#39;https://vega. github. io/vega-datasets/data/flights-5k. json&#39;       Interactive Charts With Altair&#182;: Charts made with Altair remain interactive.  Example charts taken from this repo, specifically this notebook. Example 1: DropDown&#182;:       # single-value selection over [Major_Genre, MPAA_Rating] pairs# use specific hard-wired values as the initial selected valuesselection = alt. selection_single(  name=&#39;Select&#39;,  fields=[&#39;Major_Genre&#39;, &#39;MPAA_Rating&#39;],  init={&#39;Major_Genre&#39;: &#39;Drama&#39;, &#39;MPAA_Rating&#39;: &#39;R&#39;},  bind={&#39;Major_Genre&#39;: alt. binding_select(options=genres), &#39;MPAA_Rating&#39;: alt. binding_radio(options=mpaa)}) # scatter plot, modify opacity based on selectionalt. Chart(movies). mark_circle(). add_selection(  selection). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=&#39;IMDB_Rating:Q&#39;,  tooltip=&#39;Title:N&#39;,  opacity=alt. condition(selection, alt. value(0. 75), alt. value(0. 05)))    Example 2: Tooltips&#182;:       alt. Chart(movies). mark_circle(). add_selection(  alt. selection_interval(bind=&#39;scales&#39;, encodings=[&#39;x&#39;])). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=alt. Y(&#39;IMDB_Rating:Q&#39;, axis=alt. Axis(minExtent=30)), # use min extent to stabilize axis title placement  tooltip=[&#39;Title:N&#39;, &#39;Release_Date:N&#39;, &#39;IMDB_Rating:Q&#39;, &#39;Rotten_Tomatoes_Rating:Q&#39;]). properties(  width=600,  height=400)    Example 3: More Tooltips&#182;:       # select a point for which to provide details-on-demandlabel = alt. selection_single(  encodings=[&#39;x&#39;], # limit selection to x-axis value  on=&#39;mouseover&#39;, # select on mouseover events  nearest=True,  # select data point nearest the cursor  empty=&#39;none&#39;   # empty selection includes no data points)# define our base line chart of stock pricesbase = alt. Chart(). mark_line(). encode(  alt. X(&#39;date:T&#39;),  alt. Y(&#39;price:Q&#39;, scale=alt. Scale(type=&#39;log&#39;)),  alt. Color(&#39;symbol:N&#39;))alt. layer(  base, # base line chart    # add a rule mark to serve as a guide line  alt. Chart(). mark_rule(color=&#39;#aaa&#39;). encode(    x=&#39;date:T&#39;  ). transform_filter(label),    # add circle marks for selected time points, hide unselected points  base. mark_circle(). encode(    opacity=alt. condition(label, alt. value(1), alt. value(0))  ). add_selection(label),  # add white stroked text to provide a legible background for labels  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5, stroke=&#39;white&#39;, strokeWidth=2). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),  # add text labels for stock prices  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),    data=stocks). properties(  width=700,  height=400)    Data Tables&#182;: You can display tables per the usual way in your blog:       movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;df = pd. read_json(movies)# display table with pandasdf[[&#39;Title&#39;, &#39;Worldwide_Gross&#39;,   &#39;Production_Budget&#39;, &#39;IMDB_Rating&#39;]]. head()           Title   Worldwide_Gross   Production_Budget   IMDB_Rating         0   The Land Girls   146083. 0   8000000. 0   6. 1       1   First Love, Last Rites   10876. 0   300000. 0   6. 9       2   I Married a Strange Person   203134. 0   250000. 0   6. 8       3   Let's Talk About Sex   373615. 0   300000. 0   NaN       4   Slam   1087521. 0   1000000. 0   3. 4     Images&#182;: Local Images&#182;: You can reference local images and they will be copied and rendered on your blog automatically.  You can include these with the following markdown syntax: ![](my_icons/fastai_logo. png) Remote Images&#182;: Remote images can be included with the following markdown syntax: ![](https://image. flaticon. com/icons/svg/36/36686. svg) Animated Gifs&#182;: Animated Gifs work, too! ![](https://upload. wikimedia. org/wikipedia/commons/7/71/ChessPawnSpecialMoves. gif) Captions&#182;: You can include captions with markdown images like this: ![](https://www. fast. ai/images/fastai_paper/show_batch. png  Credit: https://www. fast. ai/2020/02/13/fastai-A-Layered-API-for-Deep-Learning/ ) Other Elements&#182;Tweetcards&#182;: Typing &gt; twitter: https://twitter. com/jakevdp/status/1204765621767901185?s=20 will render this:Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019 Youtube Videos&#182;: Typing &gt; youtube: https://youtu. be/XfoYk_Z5AkI will render this: Boxes / Callouts&#182;: Typing &gt; Warning: There will be no second warning! will render this:    Warning: There will be no second warning! Typing &gt; Important: Pay attention! It's important. will render this:    Important: Pay attention! It&#8217;s important. Typing &gt; Tip: This is my tip. will render this:    Tip: This is my tip. Typing &gt; Note: Take note of this. will render this:    Note: Take note of this. Typing &gt; Note: A doc link to [an example website: fast. ai](https://www. fast. ai/) should also work fine. will render in the docs:    Note: A doc link to an example website: fast. ai should also work fine. "
    }, {
    "id": 6,
    "url": "https://byteshiva.github.io/fastpages/markdown/2020/01/14/test-markdown-post.html",
    "title": "Example Markdown Post",
    "body": "2020/01/14 - Basic setup: Jekyll requires blog post files to be named according to the following format: YEAR-MONTH-DAY-filename. md Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and filename is whatever file name you choose, to remind yourself what this post is about. . md is the file extension for markdown files. The first line of the file should start with a single hash character, then a space, then your title. This is how you create a “level 1 heading” in markdown. Then you can create level 2, 3, etc headings as you wish but repeating the hash character, such as you see in the line ## File names above. Basic formatting: You can use italics, bold, code font text, and create links. Here’s a footnote 1. Here’s a horizontal rule: Lists: Here’s a list:  item 1 item 2And a numbered list:  item 1 item 2Boxes and stuff:  This is a quotation    You can include alert boxes…and…    You can include info boxesImages: Code: General preformatted text: # Do a thingdo_thing()Python code and output: # Prints '2'print(1+1)2Tables:       Column 1   Column 2         A thing   Another thing   Tweetcards: Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019Footnotes:       This is the footnote.  &#8617;    "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}