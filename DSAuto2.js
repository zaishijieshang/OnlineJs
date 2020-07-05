function dsAuto() {
    getSubDesc = function () {
        return ".Subject-Description";
    }
    this.autoAnswerDefault = function (isSubmit) {
        var items = getSubjectItems();
        setDefaultAnswer(items);
        if (isSubmit) {
            $("#submitBtn").click();
        }
    }
    this.getSubjectItems = function () {
        var items = [];
        $(subDesc).each(function (i, v) {
            items.push($(v).attr('itemid'));
        });
        return items;
    }
    this.setDefaultAnswer = function (items) {
        items.forEach(function (v) {
            $("[itemid='" + v + "'] li").get(0).click();
        });
    }
    //获取答案
    this.getSubjectAnswer = function () {
        var items = [];
        $(subDesc).each(function (i, v) {
            var dan = {};
            dan.itemid = $(v).attr('itemid');
            dan.val = $(v).find(".Teacher-Answer span").text();
            items.push(dan);
        });
        return items;
    }

}