# CommitInfo

仓库文件每一行提交详细信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitDate** | **number** | 提交日期 | [optional] [default to undefined]
**CommitSha** | **string** | 提交信息 | [optional] [default to '']
**Committer** | [**CodingUser**](CodingUser.md) |  | [optional] [default to undefined]
**LineNumber** | **number** | 行数 | [optional] [default to undefined]

## Example

```typescript
import { CommitInfo } from './api';

const instance: CommitInfo = {
    CommitDate,
    CommitSha,
    Committer,
    LineNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
