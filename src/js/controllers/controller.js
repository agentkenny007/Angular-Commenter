export default function Controller($scope, SERVER, $http) {
    $scope.comments = [];
    $scope.error = {};
    $scope.deleteComment = id => {
        $http.delete(SERVER.URL + id).then(()=>{
            $scope.comments = $scope.comments.filter(c => c._id !== id);
        });
    }
    $scope.validate = name => {
        $scope.error.name = name ? '' : "Required.";
    }
    let init = ()=>{
        $http.get(SERVER.URL).then(resp => {
            $scope.comments = resp.data;
        });
    };
    init();
}

Controller.$inject = ['$scope', 'SERVER', '$http'];
