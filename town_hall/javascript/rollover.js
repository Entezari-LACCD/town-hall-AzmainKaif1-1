$(document).ready(function() {
    $("#image_rollovers img").each(function() {
        var src = $(this).attr("src");
        var rolloverSrc = $(this).attr("id");

        $(this).hover(
            function() {
                $(this).attr("src", rolloverSrc);
            },
            function() {
                $(this).attr("src", src);
            }
        );
    });
});
