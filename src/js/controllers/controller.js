export default function Controller($scope, SERVER, $http) {
    $scope.text = "Hello Add Controller";
    $scope.comments = [];
    $scope.addComment = comment => {
        $http.post(SERVER.URL, comment).then(res => {
            $scope.comments.push(res.data);
            $scope.comment = {};
        });
    };
    $scope.deleteComment = id => {
        $http.delete(SERVER.URL + id).then(res => {
            $scope.comments = $scope.comments.filter(c => c._id !== id);
        });
    }
    let init = ()=>{
        $http.get(SERVER.URL).then(res => {
            $scope.comments = res.data;
        });
    };
    init();
}

Controller.$inject = ['$scope', 'SERVER', '$http'];
