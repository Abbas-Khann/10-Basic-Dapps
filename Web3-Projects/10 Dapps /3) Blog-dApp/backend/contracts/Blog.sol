// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Blog {

    struct blog{
        string url;
        string title;
        string typeOf;
        string description;
    }

    blog[] public blogsArray;

    function addBlogPost(string memory _url, string memory _title, string memory _typeOf, string memory _description) public {
        blogsArray.push(blog(_url ,_title, _typeOf, _description));
    }

    function getBlogPosts() public view returns(blog[] memory) {
        return blogsArray;
    }

    function deleteBlogPosts(uint _index) public {
        blogsArray[_index] = blogsArray[blogsArray.length - 1];
        blogsArray.pop();
    }

    function getBlogsArrayLength() public view returns(uint) {
        uint blogsArrayLength = blogsArray.length;
        return blogsArrayLength;
    }

}