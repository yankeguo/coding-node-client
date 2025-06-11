# DescribeGitBlameInfoRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitSha** | **string** | 提交sha | [default to undefined]
**DepotPath** | **string** | 仓库路径 | [default to undefined]
**FilePath** | **string** | 文件路径 | [default to undefined]
**LineEnd** | **number** | 结束行 | [optional] [default to undefined]
**LineSnat** | **number** | 开始行 | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitBlameInfoRequest } from './api';

const instance: DescribeGitBlameInfoRequest = {
    CommitSha,
    DepotPath,
    FilePath,
    LineEnd,
    LineSnat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
