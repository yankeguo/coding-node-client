# GitCommitFilePath

git 提交中文件路径信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewPath** | **string** | 文件改动类型为 move 时，（移动、重命名），文件的新路径 | [optional] [default to '']
**Path** | **string** | 改动文件的路径 | [optional] [default to '']
**Type** | **string** | 文件改动类型 add update delete move | [optional] [default to '']

## Example

```typescript
import { GitCommitFilePath } from './api';

const instance: GitCommitFilePath = {
    NewPath,
    Path,
    Type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
