# GrepLineInfo

代码片段搜索信息详细列表

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BranchName** | **string** | 分支名称 | [optional] [default to '']
**CommitId** | **string** | 提交Id | [optional] [default to '']
**Contents** | **Array&lt;string&gt;** | 文件内容 | [optional] [default to undefined]
**FileMaxLine** | **number** | 文件最大行数 | [optional] [default to undefined]
**LineNum** | **number** | 代码片段的行数 | [optional] [default to undefined]
**MaxNum** | **number** | 页面上展现的最大行数 | [optional] [default to undefined]
**MinNum** | **number** | 页面上展现的最小行数 | [optional] [default to undefined]
**Path** | **string** | 代码片段对应的文件路径 | [optional] [default to '']
**Text** | **string** | 查询代码片段的文本 | [optional] [default to '']

## Example

```typescript
import { GrepLineInfo } from './api';

const instance: GrepLineInfo = {
    BranchName,
    CommitId,
    Contents,
    FileMaxLine,
    LineNum,
    MaxNum,
    MinNum,
    Path,
    Text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
